import { Rocket, ShieldCheck, Smartphone, Layout, Zap, MousePointerClick, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Solution() {
  const features = [
    {
      icon: Layout,
      title: "Design Profissional",
      description: "Design moderno e atrativo para sua marca.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Ultra Rápido",
      description: "Velocidade de carregamento ultra rápida.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MousePointerClick,
      title: "Foco em Conversão",
      description: "Estratégias para aumentar suas vendas.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: ShieldCheck,
      title: "Seguro e Estável",
      description: "Proteção de alto nível para sua segurança digital.",
      gradient: "from-emerald-400 to-green-600"
    },
  ];

  return (
    <section id="solution" className="relative py-16 overflow-hidden bg-[#030014]">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side: Content & Floating Cards */}
          <div className="space-y-8">
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide"
              >
                PREMIUM DIGITAL SOLUTIONS
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight"
              >
                Construa sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">presença digital</span> do jeito certo
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-base leading-relaxed max-w-lg"
              >
                Não entrego apenas código. Entrego uma experiência imersiva e de alta performance projetada para posicionar sua marca como líder de mercado.
              </motion.p>
            </div>

            {/* 3D Floating Grid */}
            <div className="grid sm:grid-cols-2 gap-4 perspective-1000">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateX: 10, y: 40 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    zIndex: 10,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-colors duration-300" />

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                  <div className="relative p-4 h-full flex flex-col items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} p-0.5`}>
                      <div className="w-full h-full bg-black/50 backdrop-blur-md rounded-[6px] flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Glass Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background elements behind panel */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/30 rounded-full blur-[50px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-[50px]" />

            <div className="relative bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 md:p-8 overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                O que está <span className="text-blue-400">incluso?</span>
              </h3>

              <ul className="space-y-3">
                {[
                  "Domínio e Hospedagem Configurados",
                  "Certificado de Segurança SSL",
                  "Integração com WhatsApp",
                  "Formulários de Contato",
                  "Google Analytics Instalado",
                  "Painel para Edição de Conteúdo",
                  "SEO Técnico Avançado",
                  "Suporte Prioritário"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/40 group-hover:border-blue-400 transition-all duration-300">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white shadow-lg shadow-blue-900/40 hover:shadow-blue-600/40 border border-white/10 transition-all duration-300 text-sm"
              >
                Quero meu projeto assim
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
