import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import downloadRoutes from './routes/downloads';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'UFAAL API is running securely' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
