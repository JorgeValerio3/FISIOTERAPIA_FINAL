import { FadeIn } from '../ui/FadeIn';
import { ArrowDown } from 'lucide-react';

export function Hero({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-ufaal-blue overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/home.jpeg"
                    alt="Terapia Acuática"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <FadeIn delay={0.2} direction="up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                        {data.titulo_principal}
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
                        {data.subtitulo}
                    </p>
                    <p className="text-base text-gray-300 mb-10 max-w-2xl mx-auto">
                        {data.descripcion}
                    </p>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#/quienes-somos"
                            className="px-8 py-3.5 rounded-full bg-white text-ufaal-blue font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                            {data.cta_primario}
                        </a>
                        {data.video_id && (
                            <a
                                href={`https://youtube.com/watch?v=${data.video_id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
                            >
                                {data.cta_secundario}
                            </a>
                        )}
                    </div>
                </FadeIn>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <a href="#/quienes-somos" className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors transition-opacity opacity-70 hover:opacity-100">
                    <ArrowDown className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
}
