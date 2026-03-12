import contentData from '../data/content.json';

export const getContent = async () => {
    return contentData;
};

export const getUploadUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    // For static deployment, uploads are in the public/uploads folder
    return path; 
};
