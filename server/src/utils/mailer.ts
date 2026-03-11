import nodemailer from 'nodemailer';

export interface EmailData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

/**
 * Creates a transporter for sending emails.
 * Uses SMTP settings from environment variables if available, otherwise falls back to Ethereal.
 */
async function getTransporter() {
    console.log('--- Iniciando configuración de Transporter ---');
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        console.log(`Usando configuración SMTP real: ${process.env.SMTP_HOST}`);
        return nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }

    // Fallback to Ethereal for development
    console.log('Variables SMTP incompletas. Usando Ethereal Email para pruebas.');
    const testAccount = await nodemailer.createTestAccount();
    console.log(`Cuenta Ethereal generada: ${testAccount.user}`);
    return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });
}

/**
 * Generates a professional HTML email template.
 */
function getHtmlTemplate(data: EmailData): string {
    const { name, email, phone, subject, message } = data;
    
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; border: 1px solid #e1e1e1; border-top: 5px solid #0056b3; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
            .header { background: #f8fbff; padding: 25px; text-align: center; border-bottom: 1px solid #eee; }
            .header h1 { margin: 0; color: #0056b3; font-size: 24px; }
            .content { padding: 30px; background: #ffffff; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #555; font-size: 14px; text-transform: uppercase; margin-bottom: 5px; }
            .field-value { font-size: 16px; background: #f9f9f9; padding: 10px; border-radius: 4px; border-left: 3px solid #0056b3; }
            .message-box { background: #f9f9f9; padding: 20px; border-radius: 4px; border: 1px solid #eee; margin-top: 10px; white-space: pre-wrap; }
            .footer { background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Nuevo Mensaje de Contacto</h1>
                <p>Landing Page Fisioterapia LATAM</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">Nombre del Remitente</div>
                    <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Correo Electrónico</div>
                    <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>

                ${phone ? `
                <div class="field">
                    <div class="field-label">Teléfono de Contacto</div>
                    <div class="field-value">${phone}</div>
                </div>
                ` : ''}

                <div class="field">
                    <div class="field-label">Asunto</div>
                    <div class="field-value">${subject || 'Sin asunto'}</div>
                </div>

                <div class="field">
                    <div class="field-label">Mensaje</div>
                    <div class="message-box">${message}</div>
                </div>
            </div>
            <div class="footer">
                Este es un mensaje automático generado desde el formulario de contacto del sitio web.
            </div>
        </div>
    </body>
    </html>
    `;
}

/**
 * Sends a contact email.
 */
export async function sendContactEmail(data: EmailData) {
    console.log(`Intentando enviar email de: ${data.email}`);
    const transporter = await getTransporter();
    const contactEmail = process.env.CONTACT_EMAIL || "contacto@ufaal.org";
    const fromName = process.env.SMTP_FROM_NAME || "Formulario de Contacto";
    const fromEmail = process.env.SMTP_USER || "no-reply@ufaal.org";

    try {
        console.log('Enviando mail a:', contactEmail);
        const info = await transporter.sendMail({
            from: `"${fromName}" <${fromEmail}>`,
            replyTo: `"${data.name}" <${data.email}>`,
            to: contactEmail,
            subject: `Nuevo mensaje de Contacto UFAAL: ${data.subject || 'Sin asunto'}`,
            text: `Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone || 'N/A'}\nAsunto: ${data.subject}\n\nMensaje:\n${data.message}`,
            html: getHtmlTemplate(data),
        });

        console.log("Email enviado exitosamente. ID:", info.messageId);

        if (!process.env.SMTP_HOST) {
            console.log("Previsualización disponible en: %s", nodemailer.getTestMessageUrl(info));
        }

        return info;
    } catch (error) {
        console.error('Error detallado al enviar email:', error);
        throw error;
    }
}
