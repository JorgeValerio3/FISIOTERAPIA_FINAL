import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Organización', href: '#organizacion' },
    { label: 'Países Miembros', href: '#paises' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Investigación', href: '#investigacion' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Afiliación', href: '#afiliacion' },
    { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={twMerge(
                clsx(
                    'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6',
                    isScrolled
                        ? 'bg-ufaal-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
                        : 'bg-transparent py-6'
                )
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center w-full">
                {/* Animated Logo */}
                <div
                    className={clsx(
                        "flex items-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shrink-0",
                        isScrolled ? "w-24 lg:w-32 opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-8 pointer-events-none"
                    )}
                >
                    <a href="#inicio" className="flex items-center w-24 lg:w-32 shrink-0">
                        <img
                            src="/images/ufal.png?v=3"
                            alt="Logo UFAAL"
                            className="h-12 w-auto object-contain"
                        />
                    </a>
                </div>

                {/* Left Flexible Spacer (Always pushes to the right) */}
                <div className="flex-1 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 shrink-0 z-10">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-ufaal-blue",
                                isScrolled ? "text-gray-600" : "text-gray-200 hover:text-white"
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Right Flexible Spacer (Centers the nav initially, shrinks to 0 on scroll to let it slide right) */}
                <div
                    className={clsx(
                        "hidden lg:block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isScrolled ? "flex-none w-0" : "flex-1"
                    )}
                ></div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden p-2 ml-auto z-10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={clsx("w-6 h-6", isScrolled ? "text-ufaal-blue" : "text-white")} />
                    ) : (
                        <Menu className={clsx("w-6 h-6", isScrolled ? "text-ufaal-blue" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 lg:hidden flex flex-col p-4 gap-4 pb-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-800 text-sm font-medium hover:text-ufaal-blue hover:bg-gray-50 p-2 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
