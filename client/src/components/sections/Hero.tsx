import heroBg from "@assets/generated_images/minimalist_abstract_white_and_gray_geometric_background.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
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

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base h-12 px-8 shadow-lg shadow-blue-900/10">
              Solicitar orçamento
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 text-gray-700 text-base h-12 px-8">
              <MessageCircle className="mr-2 w-4 h-4" />
              Falar no WhatsApp
            </Button>
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
          className="relative hidden lg:block"
        >
          {/* Abstract representation of a clean interface */}
          <div className="relative rounded-2xl shadow-2xl bg-white border border-gray-100 p-2 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="rounded-xl overflow-hidden bg-gray-50 aspect-[4/3] flex flex-col">
                {/* Mock Browser Header */}
                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mock Content */}
                <div className="p-8 flex-1 flex flex-col justify-center items-center gap-4">
                  <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-1/2 h-4 bg-gray-100 rounded animate-pulse"></div>
                  <div className="flex gap-4 mt-4">
                     <div className="w-24 h-8 bg-blue-100 rounded animate-pulse"></div>
                     <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
