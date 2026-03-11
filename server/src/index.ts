import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import downloadRoutes from './routes/downloads';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/downloads', downloadRoutes);

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'UFAAL API is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
