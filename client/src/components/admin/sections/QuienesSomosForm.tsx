import { ImageUpload } from '../ImageUpload';

interface QuienesSomosFormProps {
    data: any;
    onChange: (data: any) => void;
}

export function QuienesSomosForm({ data, onChange }: QuienesSomosFormProps) {
    const handleChange = (field: string, value: any) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Título</label>
                <input 
                    type="text" 
                    value={data.titulo} 
                    onChange={(e) => handleChange('titulo', e.target.value)}
                    className="w-full sm:w-1/2 border border-gray-200 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-ufaal-blue/30 outline-none"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Historia</label>
                    <textarea 
                        value={data.historia} 
                        onChange={(e) => handleChange('historia', e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 h-32 focus:ring-2 focus:ring-ufaal-blue/30 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Misión</label>
                    <textarea 
                        value={data.mision} 
                        onChange={(e) => handleChange('mision', e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 h-32 focus:ring-2 focus:ring-ufaal-blue/30 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Visión</label>
                    <textarea 
                        value={data.vision} 
                        onChange={(e) => handleChange('vision', e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 h-32 focus:ring-2 focus:ring-ufaal-blue/30 outline-none"
                    />
                </div>
                <div>
                    <ImageUpload 
                        label="Imagen Destacada"
                        currentImage={data.imagen_destacada} 
                        onUploadSuccess={(url) => handleChange('imagen_destacada', url)} 
                    />
                </div>
            </div>
        </div>
    );
}
