const API_URL = 'http://localhost:5000/api/admin';

export const getContent = async () => {
    try {
        const response = await fetch(`${API_URL}/content`);
        if (!response.ok) throw new Error('Error al obtener contenido');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getUploadUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `http://localhost:5000${path}`;
};
