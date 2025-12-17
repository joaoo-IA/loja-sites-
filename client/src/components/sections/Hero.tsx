import heroBg from "@assets/generated_images/minimalist_abstract_white_and_gray_geometric_background.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioSlider } from "../PortfolioSlider";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex lg:items-center pt-24 pb-12 lg:py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-[1.1] mb-6">
            Sites Profissionais que Geram <span className="text-blue-600">Confiança</span> e <span className="text-blue-600">Resultados</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Transforme visitantes em clientes com um site estratégico, rápido e otimizado para vendas. Não é apenas design, é posicionamento de mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto relative z-20">
            {/* Using raw button tag to debug mobile visibility */}
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-blue-900 text-white hover:bg-blue-800 h-12 px-8 shadow-lg shadow-blue-900/10"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              <span className="text-white font-bold text-base">Solicitar orçamento</span>
              <ArrowRight className="ml-2 w-4 h-4 text-white" />
            </button>

            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-800 h-12 px-8"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              <MessageCircle className="mr-2 w-4 h-4 text-gray-700" />
              <span className="text-gray-800 font-bold text-base">Falar no WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Sem compromisso</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full mt-8 lg:mt-0"
        >
          <PortfolioSlider />

          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
