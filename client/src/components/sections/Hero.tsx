
import { FadeIn } from '../ui/FadeIn';
import { ArrowDown } from 'lucide-react';

export function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-ufaal-blue overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2620&auto=format&fit=crop"
                    alt="Terapia Acuática"
                    className="w-full h-full object-cover"
                />
                {/* A subtle gradient from black to transparent just to ensure white text is always readable over any image color profile, without completely altering the image hue */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <FadeIn delay={0.2} direction="up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                        Integrando la fisioterapia acuática de América Latina
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Unión de Fisioterapia Acuática de América Latina (UFAAL)
                    </p>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#quienes-somos"
                            className="px-8 py-3.5 rounded-full bg-white text-ufaal-blue font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                            Conoce nuestra misión
                        </a>
                        <a
                            href="#contacto"
                            className="px-8 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
                        >
                            Contáctanos
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <a href="#quienes-somos" className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors transition-opacity opacity-70 hover:opacity-100">
                    <ArrowDown className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
}
