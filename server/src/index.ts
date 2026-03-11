import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import morgan from 'morgan';
import contactRoutes from './routes/contact';
import downloadRoutes from './routes/downloads';
import { mailQueue } from './utils/mailQueue';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Iniciar el worker de la cola de correos al arrancar
mailQueue.start();

// Request Logger (Debugger)
app.use(morgan('dev'));

// Security Middleware
app.use(helmet());
app.use(cors({ 
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST']
}));

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limitar cada IP a 100 peticiones por ventana
    message: 'Demasiadas peticiones desde esta IP, intente de nuevo más tarde.',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/', apiLimiter);

app.use(express.json({ limit: '10kb' })); // Prevenir payload demasiado grande

app.use('/api/contact', contactRoutes);
app.use('/api/downloads', downloadRoutes);

// Global Error Handler (Centralized Debugging)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('--- DEBUG ERROR START ---');
    console.error(`Method: ${req.method} | URL: ${req.originalUrl}`);
    console.error('Error Stack:', err.stack);
    console.error('--- DEBUG ERROR END ---');

    res.status(err.status || 500).json({
        error: 'Ocurrió un error interno en el servidor.',
        message: err.message,
        details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Manejo de Cierre Limpio (Graceful Shutdown)
const shutdown = async (signal: string) => {
    console.log(`\n[Recibido ${signal}] Iniciando proceso de apagado...`);
    
    // 1. Detener el worker de correos y esperar a que termine lo pendiente
    await mailQueue.stop();
    
    // 2. Cerrar el servidor Express
    server.close(() => {
        console.log('[Express] Servidor cerrado.');
        process.exit(0);
    });

    // Forzar salida si no cierra en 10 segundos
    setTimeout(() => {
        console.error('[Shutdown] Tiempo de espera agotado, forzando salida.');
        process.exit(1);
    }, 10000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
