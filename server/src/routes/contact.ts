import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { mailQueue } from '../utils/mailQueue';

const router = Router();

// Endpoint para recibir formulario de contacto
router.post('/', [
    body('name').trim().notEmpty().withMessage('El nombre es obligatorio').escape(),
    body('email').isEmail().withMessage('El email es inválido').normalizeEmail(),
    body('phone').optional().trim().escape(),
    body('subject').optional().trim().escape(),
    body('message').trim().notEmpty().withMessage('El mensaje es obligatorio').escape()
], async (req: Request, res: Response): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.status(400).json({ 
                 error: 'Errores en la validación de los datos.', 
                 details: errors.array() 
             });
             return;
        }

        const { name, email, phone, subject, message } = req.body;

        // Producir mensaje: Encolamos para procesamiento asíncrono
        mailQueue.enqueue({
            name,
            email,
            phone,
            subject,
            message
        });

        // Respuesta inmediata al usuario (HTTP 202 o 200)
        res.status(202).json({ 
            success: true, 
            message: 'Hemos recibido tu consulta satisfactoriamente. Estarás recibiendo una respuesta a la brevedad.' 
        });
    } catch (error) {
        console.error('Error enviando email:', error);
        res.status(500).json({ 
            error: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
        });
    }
});

export default router;
