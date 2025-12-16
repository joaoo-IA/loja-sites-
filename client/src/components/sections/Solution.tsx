import { Rocket, ShieldCheck, Smartphone, Layout, Zap, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

export function Solution() {
  const features = [
    {
      icon: Layout,
      title: "Design Profissional",
      description: "Layouts modernos que transmitem autoridade e confiança imediata.",
    },
    {
      icon: Zap,
      title: "Ultra Rápido",
      description: "Otimização de performance para carregar em milissegundos.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Experiência perfeita em celulares, tablets e computadores.",
    },
    {
      icon: MousePointerClick,
      title: "Foco em Conversão",
      description: "Estrutura desenhada para transformar visitantes em leads.",
    },
    {
      icon: ShieldCheck,
      title: "Seguro e Estável",
      description: "Proteção contra ataques e estabilidade 24/7.",
    },
    {
      icon: Rocket,
      title: "SEO Otimizado",
      description: "Estrutura pronta para ser encontrada pelo Google.",
    },
  ];

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">A Solução Ideal</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mt-2 mb-6">
              Construo sua presença digital do jeito certo
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Não entrego apenas código ou layouts bonitos. Entrego uma ferramenta de negócios projetada para posicionar sua marca e gerar resultados reais.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
               
               <h3 className="text-2xl font-bold mb-6">O que está incluso?</h3>
               <ul className="space-y-4">
                 {[
                   "Domínio e Hospedagem Configurados",
                   "Certificado de Segurança SSL",
                   "Integração com WhatsApp",
                   "Formulários de Contato",
                   "Google Analytics Instalado",
                   "Painel para Edição de Conteúdo"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-300">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
