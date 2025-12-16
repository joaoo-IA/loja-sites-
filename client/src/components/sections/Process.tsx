import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Briefing & Objetivos",
      description: "Entendo seu negócio, seu público e o que você quer alcançar."
    },
    {
      number: "02",
      title: "Estrutura & Design",
      description: "Crio o planejamento visual e a arquitetura das informações."
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Transformo o design em um site real, rápido e funcional."
    },
    {
      number: "04",
      title: "Revisão & Entrega",
      description: "Ajustamos os detalhes finais e colocamos seu site no ar."
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-900 text-white overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Como funciona o processo
          </h2>
          <p className="text-gray-400">
            Do primeiro contato até o site no ar, tudo organizado e transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-gray-800 -z-10 group-hover:bg-blue-900 transition-colors duration-500"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-xl font-bold text-blue-400 mb-6 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:bg-blue-900/10 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
