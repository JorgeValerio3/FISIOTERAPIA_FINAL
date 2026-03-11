import { FadeIn } from '../ui/FadeIn';

export function Colaboradores() {
    const colaboradores = [
        { src: "/images/ufal.png", alt: "Logo UFAL", class: "h-24 md:h-28 object-contain" },
        { src: "/images/ipapt.png", alt: "Logo IPAPT", class: "h-28 md:h-32 object-contain" },
        { src: "/images/logo.svg", alt: "Logo Especializado", class: "h-20 md:h-24 object-contain brightness-0 hover:brightness-100 transition-all opacity-80 hover:opacity-100" } // Ajuste a SVG ya que puede tener estilos propios distintos a los PNG
    ];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <FadeIn direction="up">
                    <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-4 tracking-tight">
                        Colaboradores
                    </h2>
                    <div className="w-24 h-1 bg-ufaal-blue-light mx-auto rounded-full mb-16"></div>
                </FadeIn>

                <FadeIn delay={0.2} direction="up" className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32">
                    {colaboradores.map((colab, index) => (
                        <div key={index} className="flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300">
                            <img
                                src={colab.src}
                                alt={colab.alt}
                                className={colab.class}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </FadeIn>

            </div>
        </section>
    );
}
