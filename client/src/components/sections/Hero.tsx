import { useState, useEffect } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { FadeIn } from '../ui/FadeIn';
import { ArrowDown } from 'lucide-react';
import { Skeleton } from '../ui/Skeleton';

export function Hero({ data: _data }: { data?: any }) {
    const { t, isLoading } = useI18n();

    const [scrollPos, setScrollPos] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollPos(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logoOpacity = Math.max(0, 1 - scrollPos / 200);
    const logoScale = Math.max(0.8, 1 - scrollPos / 500);
    const logoTranslate = scrollPos * 0.2;

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-ufaal-blue overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <img
                    src="./images/home2.jpg"
                    alt="Terapia Acuática"
                    className="w-full h-full object-cover hero-bg-image"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12 md:mt-48">
                <FadeIn delay={0.1} direction="down">
                    <div 
                        className="flex justify-center mb-8 drop-shadow-2xl transition-all duration-300 ease-out"
                        style={{ 
                            opacity: logoOpacity,
                            transform: `scale(${logoScale}) translateY(${logoTranslate}px)`,
                            filter: `blur(${scrollPos / 50}px)`
                        }}
                    >
                        <img 
                            src="./images/logo_sin_fondo.png" 
                            alt="Logo UFAAL" 
                            className="h-64 md:h-72 lg:h-80 w-auto object-contain brightness-110 contrast-125"
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 min-h-[1.2em]">
                        {isLoading ? (
                            <Skeleton className="h-12 md:h-16 lg:h-20 w-3/4 mx-auto bg-white/20" />
                        ) : (
                            t('hero.titulo')
                        )}
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <div className="space-y-4 mb-10">
                        {isLoading ? (
                            <>
                                <Skeleton className="h-6 w-1/2 mx-auto bg-white/20" />
                                <Skeleton className="h-4 w-2/3 mx-auto bg-white/20" />
                            </>
                        ) : (
                            <>
                                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                                    {t('hero.subtitulo')}
                                </p>
                                <p className="text-base text-gray-300 max-w-2xl mx-auto">
                                    {t('hero.descripcion')}
                                </p>
                            </>
                        )}
                    </div>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3.5 rounded-full bg-white text-ufaal-blue font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                            {t('hero.cta_primario')}
                        </button>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <button 
                    onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors transition-opacity opacity-70 hover:opacity-100"
                >
                    <ArrowDown className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
