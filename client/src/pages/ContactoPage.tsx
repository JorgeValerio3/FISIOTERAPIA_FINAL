import { FadeIn } from '../components/ui/FadeIn';
import { Mail, Phone, Clock, Send } from 'lucide-react';
import contentData from '../data/content.json';

export default function ContactoPage() {
    const { contacto } = contentData;

    return (
        <div className="pt-32 pb-24 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-ufaal-gray z-0 hidden lg:block opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn direction="up">
                    <h1 className="text-4xl md:text-5xl font-bold text-ufaal-blue mb-8 tracking-tight">Soporte y Contacto</h1>
                    <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-12"></div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <FadeIn delay={0.1} direction="right">
                            <p className="text-gray-600 text-lg font-light leading-relaxed mb-12 max-w-xl">
                                Estamos a su disposición para resolver cualquier duda institucional, académica o técnica. Nuestro equipo le responderá a la brevedad posible.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-ufaal-blue text-white rounded-2xl shadow-lg shadow-ufaal-blue/20 transition-all duration-300 group-hover:scale-110">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-ufaal-text">Canal Oficial</h4>
                                        <a href={`mailto:${contacto.email}`} className="text-gray-600 hover:text-ufaal-blue transition-colors font-light text-lg">
                                            {contacto.email}
                                        </a>
                                        <p className="text-sm text-ufaal-blue-light font-medium mt-1 uppercase tracking-wider">Respuesta en menos de 24h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white border border-gray-100 text-ufaal-blue rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-110">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-ufaal-text">Atención Telefónica</h4>
                                        <p className="text-gray-600 font-light text-lg">{contacto.telefono}</p>
                                        <div className="flex items-center gap-2 mt-1 text-gray-400">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">9:00 AM - 6:00 PM (GMT-6)</span>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="mt-12 p-8 bg-ufaal-blue/5 border border-ufaal-blue-light/10 rounded-3xl">
                                <h5 className="font-bold text-ufaal-blue mb-2">Afiliaciones Internacionales</h5>
                                <p className="text-sm text-gray-500 font-light">
                                    Para consultas específicas sobre la World Physiotherapy o la IOAPT, nuestro equipo puede orientarlo sobre los procesos de validación regional.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <FadeIn delay={0.3} direction="left">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 relative">
                                <h3 className="text-2xl font-bold text-ufaal-text mb-8">Formulario de Soporte</h3>
                                
                                <form action={`https://formsubmit.co/${contacto.email}`} method="POST" className="space-y-6">
                                    <input type="hidden" name="_subject" value="Solicitud de Soporte UFAAL" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_next" value={window.location.origin} />
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Nombre Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Ej: Dr. Julian Rodriguez"
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-ufaal-blue-light/50 focus:ring-4 focus:ring-ufaal-blue-light/5 outline-none transition-all placeholder-gray-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="ejemplo@organizacion.org"
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-ufaal-blue-light/50 focus:ring-4 focus:ring-ufaal-blue-light/5 outline-none transition-all placeholder-gray-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Asunto</label>
                                        <select 
                                            name="subject"
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-ufaal-blue-light/50 focus:ring-4 focus:ring-ufaal-blue-light/5 outline-none transition-all"
                                        >
                                            <option>Soporte Técnico</option>
                                            <option>Consultas sobre Afiliación</option>
                                            <option>Programas de Formación</option>
                                            <option>Investigación y Publicaciones</option>
                                            <option>Otros</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Mensaje</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Detalle su consulta para que podamos ayudarle..."
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-ufaal-blue-light/50 focus:ring-4 focus:ring-ufaal-blue-light/5 outline-none transition-all resize-none placeholder-gray-400"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-ufaal-blue text-white rounded-2xl font-bold hover:bg-ufaal-blue-light transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95"
                                    >
                                        <Send className="w-5 h-5" /> Enviar Solicitud
                                    </button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </div>
    );
}
