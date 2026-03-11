import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';

const CONTENT_PATH = path.join(__dirname, '../../data/content.json');
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_default';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const adminUser = process.env.ADMIN_USER;
    const adminPass = process.env.ADMIN_PASS;

    if (username === adminUser && password === adminPass) {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' });
        res.json({ token, message: 'Login exitoso' });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
};

export const getContent = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await fs.readFile(CONTENT_PATH, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Error al leer el contenido JSON' });
    }
};

export const updateContent = async (req: Request, res: Response): Promise<void> => {
    try {
        // Enforce parsing existing content first dynamically to avoid complete overwrite corruption if req.body is bad
        const newContent = req.body;
        await fs.writeFile(CONTENT_PATH, JSON.stringify(newContent, null, 2), 'utf-8');
        res.json({ message: 'Contenido global actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el contenido' });
    }
};

export const updateSection = async (req: Request, res: Response): Promise<void> => {
    try {
        const section = req.params.section as string;
        const sectionData = req.body;

        const fileData = await fs.readFile(CONTENT_PATH, 'utf-8');
        const content = JSON.parse(fileData);

        if (!content.hasOwnProperty(section)) {
             res.status(404).json({ error: `La sección '${section}' no existe en el esquema.` });
             return;
        }

        // Merge section data
        content[section] = sectionData;

        await fs.writeFile(CONTENT_PATH, JSON.stringify(content, null, 2), 'utf-8');
        res.json({ message: `Sección '${section}' actualizada correctamente`, section: content[section] });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la sección específica.' });
    }
};

export const uploadFile = (req: Request, res: Response): void => {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
        // Backwards compatibility for single upload
        if (req.file) {
            res.json({ url: `/uploads/${req.file.filename}`, message: 'Archivo subido correctamente' });
            return;
        }
        res.status(400).json({ error: 'No se subió ningún archivo' });
        return;
    }
    
    // Multiple files
    const urls = (req.files as Express.Multer.File[]).map(file => `/uploads/${file.filename}`);
    res.json({ urls, message: 'Archivos subidos correctamente' });
};
