import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 tracking-tight">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Não deixe para depois. Comece hoje a transformar sua presença digital e atrair mais clientes para o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200">
              Falar comigo agora
              <MessageCircle className="ml-2 w-5 h-5" />
            </Button>
            <span className="text-sm text-gray-400 font-medium px-4">ou</span>
             <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Solicitar orçamento por email
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Atendimento direto • Sem compromisso</p>
          </div>
        </div>
      </div>
    </section>
  );
}
