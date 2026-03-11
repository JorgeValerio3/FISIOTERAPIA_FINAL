import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

// Asegurarse de que exista la carpeta de descargas
const downloadsPath = path.join(__dirname, '../../public/downloads');
if (!fs.existsSync(downloadsPath)) {
    fs.mkdirSync(downloadsPath, { recursive: true });
}

// Endpoint para servir un archivo
router.get('/:filename', (req: Request<{ filename: string }>, res: Response, next: NextFunction): void => {
    const { filename } = req.params;
    const filePath = path.join(downloadsPath, filename);

    // Prevenir directory traversal attacks (Ataques de Directorios)
    if (!filePath.startsWith(downloadsPath)) {
        res.status(403).json({ error: 'Acceso denegado' });
        return;
    }

    // Verificar que el archivo existe
    if (fs.existsSync(filePath)) {
        res.download(filePath, (err) => {
            if (err) {
                console.error('Error enviando archivo:', err);
                if (!res.headersSent) {
                    res.status(500).json({ error: 'Error interno en el servidor' });
                }
            }
        });
    } else {
        res.status(404).json({ error: 'Archivo no encontrado' });
    }
});

export default router;
