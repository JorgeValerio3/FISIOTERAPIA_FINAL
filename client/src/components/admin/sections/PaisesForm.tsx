import { Plus, Trash2 } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';

interface PaisesFormProps {
    data: any;
    onChange: (data: any) => void;
}

export function PaisesForm({ data, onChange }: PaisesFormProps) {
    const handleChange = (field: string, value: any) => {
        onChange({ ...data, [field]: value });
    };

    const handlePaisChange = (index: number, field: string, value: any) => {
        const newPaises = [...data.paises_lista];
        newPaises[index] = { ...newPaises[index], [field]: value };
        handleChange('paises_lista', newPaises);
    };

    const addPais = () => {
        const newPaises = [...data.paises_lista, { id: "", nombre: "", latitud: 0, longitud: 0, representante: "", cargo: "", imagen: "" }];
        handleChange('paises_lista', newPaises);
    };

    const removePais = (index: number) => {
        const newPaises = [...data.paises_lista];
        newPaises.splice(index, 1);
        handleChange('paises_lista', newPaises);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Título</label>
                    <input type="text" value={data.titulo} onChange={(e) => handleChange('titulo', e.target.value)} className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 outline-none" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Descripción</label>
                    <input type="text" value={data.descripcion} onChange={(e) => handleChange('descripcion', e.target.value)} className="w-full border border-gray-200 rounded-lg p-3 bg-gray-50 outline-none" />
                </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-ufaal-text">Lista de Países y Representantes</h3>
                    <button onClick={addPais} className="flex items-center gap-2 bg-ufaal-blue/10 text-ufaal-blue px-4 py-2 rounded-lg font-medium hover:bg-ufaal-blue/20 transition-all">
                        <Plus className="w-4 h-4" /> Agregar País
                    </button>
                </div>

                <div className="space-y-6">
                    {data.paises_lista.map((pais: any, idx: number) => (
                        <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm relative pr-12">
                            <button onClick={() => removePais(idx)} className="absolute top-6 right-6 text-red-500 hover:bg-red-50 p-2 rounded-lg">
                                <Trash2 className="w-5 h-5" />
                            </button>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">ID País (ej. ar)</label>
                                        <input type="text" value={pais.id} onChange={(e) => handlePaisChange(idx, 'id', e.target.value)} className="w-full border border-gray-200 rounded p-2 text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Nombre País</label>
                                        <input type="text" value={pais.nombre} onChange={(e) => handlePaisChange(idx, 'nombre', e.target.value)} className="w-full border border-gray-200 rounded p-2 text-sm" />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Latitud (Mapa)</label>
                                            <input type="number" step="any" value={pais.latitud} onChange={(e) => handlePaisChange(idx, 'latitud', parseFloat(e.target.value))} className="w-full border border-gray-200 rounded p-2 text-sm" />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Longitud (Mapa)</label>
                                            <input type="number" step="any" value={pais.longitud} onChange={(e) => handlePaisChange(idx, 'longitud', parseFloat(e.target.value))} className="w-full border border-gray-200 rounded p-2 text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Nombre Representante</label>
                                        <input type="text" value={pais.representante} onChange={(e) => handlePaisChange(idx, 'representante', e.target.value)} className="w-full border border-gray-200 rounded p-2 text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Cargo Representante</label>
                                        <input type="text" value={pais.cargo} onChange={(e) => handlePaisChange(idx, 'cargo', e.target.value)} className="w-full border border-gray-200 rounded p-2 text-sm" />
                                    </div>
                                </div>
                                
                                <div>
                                    <ImageUpload 
                                        label="Foto del Representante" 
                                        currentImage={pais.imagen} 
                                        onUploadSuccess={(url) => handlePaisChange(idx, 'imagen', url)} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
