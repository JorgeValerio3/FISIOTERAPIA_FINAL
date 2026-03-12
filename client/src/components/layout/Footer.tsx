

export function Footer({ data }: { data: any }) {
    const currentYear = new Date().getFullYear();
    if (!data) return null;

    const enlacesRapidos = (data.enlaces || []).slice(0, 4);
    const recursos = (data.enlaces || []).slice(4);

    return (
        <footer className="bg-ufaal-blue pt-20 pb-10 border-t border-ufaal-blue-light/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 group mb-6">
                            <img
                                src="./images/logo.svg"
                                alt="Logo UFAAL"
                                className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                                loading="lazy"
                            />
                        </div>
                        <p className="text-gray-300 font-light leading-relaxed max-w-sm">
                            {data.descripcion}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-4">
                            {enlacesRapidos.map((link: any, idx: number) => (
                                <li key={idx}>
                                    <a href={link.url} className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                                        {link.titulo}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Recursos</h4>
                        <ul className="space-y-4">
                            {recursos.map((link: any, idx: number) => (
                                <li key={idx}>
                                    <a href={link.url} className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                                        {link.titulo}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-ufaal-blue-light/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm font-light">
                        &copy; {currentYear} {data.copyright || "Unión de Fisioterapia Acuática de América Latina. Todos los derechos reservados."}
                    </p>
                    <p className="text-gray-400 text-sm font-light flex items-center gap-1">
                        Subgrupo reconocido por OIAPT / World Physiotherapy
                    </p>
                </div>
            </div>
        </footer>
    );
}
