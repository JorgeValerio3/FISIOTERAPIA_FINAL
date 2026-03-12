import { FadeIn } from '../ui/FadeIn';
import { Mail, Send, Facebook, Instagram } from 'lucide-react';

export function Contacto({ data }: { data: any }) {
    if (!data) return null;

    const correo = data.email || 'ufaal2020@gmail.com';

    return (
        <section id="contacto" className="py-24 bg-white relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-ufaal-gray z-0 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16 lg:text-left">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">{data.titulo}</h2>
                        <div className="w-24 h-1 bg-ufaal-blue-light mx-auto lg:mx-0 rounded-full mb-6"></div>
                        <p className="text-gray-600 font-light text-lg">
                            {data.descripcion}
                        </p>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Form Column */}
                    <div className="w-full lg:w-[60%] bg-white rounded-3xl shadow-xl shadow-ufaal-blue/5 border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ufaal-blue via-ufaal-blue-light to-blue-300"></div>

                        <FadeIn delay={0.2} direction="right">
                            <h3 className="text-2xl font-bold text-ufaal-text mb-8">Envíanos un mensaje</h3>

                            <form action={`https://formsubmit.co/${correo}`} method="POST" className="space-y-6">
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="Nuevo contacto desde Landing Page UFAAL" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value={window.location.href} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre completo</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="nombre"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ufaal-blue-light/20 focus:border-ufaal-blue-light outline-none transition-all placeholder-gray-400"
                                            placeholder="Ej. Dra. Elena Silva"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo electrónico</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ufaal-blue-light/20 focus:border-ufaal-blue-light outline-none transition-all placeholder-gray-400"
                                            placeholder="ejemplo@institucion.org"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono (WhatsApp)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="telefono"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ufaal-blue-light/20 focus:border-ufaal-blue-light outline-none transition-all placeholder-gray-400"
                                            placeholder="Ej. +52 55 1234 5678"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Asunto</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="asunto"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ufaal-blue-light/20 focus:border-ufaal-blue-light outline-none transition-all placeholder-gray-400"
                                            placeholder="Consulta sobre tratamiento"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="mensaje"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ufaal-blue-light/20 focus:border-ufaal-blue-light outline-none transition-all resize-none placeholder-gray-400"
                                        placeholder="Desarrolla tu consulta aquí..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3.5 bg-ufaal-blue text-white rounded-xl font-medium hover:bg-ufaal-blue-light transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" /> Enviar Mensaje
                                </button>
                            </form>
                        </FadeIn>
                    </div>

                    {/* Info Column */}
                    <div className="w-full lg:w-[40%] flex flex-col justify-center">
                        <FadeIn delay={0.4} direction="left" className="space-y-12">

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-full text-ufaal-blue shadow-sm border border-gray-100 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-ufaal-text mb-1">Correo Electrónico</h4>
                                        <a href={`mailto:${correo}`} className="text-gray-600 hover:text-ufaal-blue transition-colors font-light">
                                            {correo}
                                        </a>
                                        <p className="text-gray-500 text-sm mt-1">Lunes a Viernes - Horario hábil</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-ufaal-text mb-6">Redes Sociales</h4>
                                <div className="flex gap-4">
                                    {data.facebook && (
                                        <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-500 hover:text-white hover:bg-[#1877F2] transition-colors shadow-sm border border-gray-100">
                                            <Facebook className="w-6 h-6" />
                                        </a>
                                    )}
                                    {data.instagram && (
                                        <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-500 hover:text-white hover:bg-[#E4405F] transition-colors shadow-sm border border-gray-100">
                                            <Instagram className="w-6 h-6" />
                                        </a>
                                    )}
                                    {(!data.facebook && !data.instagram) && (
                                        <span className="text-gray-400 text-sm">No hay redes sociales configuradas.</span>
                                    )}
                                </div>
                            </div>

                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
