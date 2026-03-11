import { Router, Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';

const router = Router();

// Endpoint para recibir formulario de contacto
router.post('/', [
    body('name').trim().notEmpty().withMessage('Nombre es obligatorio').escape(),
    body('email').isEmail().withMessage('Email inválido').normalizeEmail(),
    body('subject').optional().trim().escape(),
    body('message').trim().notEmpty().withMessage('El mensaje es obligatorio').escape()
], async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.status(400).json({ error: 'Errores en la validación de los datos.', details: errors.array() });
             return;
        }

        const { name, email, subject, message } = req.body;

        // Configuración para el MVP
        let transporter;

        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: process.env.SMTP_SECURE === 'true',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });
        } else {
            // Fallback para pruebas si no hay .env configurado: usa Ethereal Email
            const testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
            console.log('Utilizando cuenta de prueba Ethereal para Nodemailer.');
        }

        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_EMAIL || "contacto@ufaal.org",
            subject: `Nuevo mensaje de Contacto UFAAL: ${subject || 'Sin asunto'}`,
            text: message,
            html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Asunto:</strong> ${subject}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${message}</p>`,
        });

        console.log("Mensaje enviado: %s", info.messageId);

        if (!process.env.SMTP_HOST) {
            console.log("URL de vista previa: %s", nodemailer.getTestMessageUrl(info));
        }

        res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
    } catch (error) {
        console.error('Error enviando email:', error);
        res.status(500).json({ error: 'Hubo un problema al enviar el mensaje.' });
    }
});

export default router;
