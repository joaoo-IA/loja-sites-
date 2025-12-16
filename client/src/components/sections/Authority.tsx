import { Check } from "lucide-react";

export function Authority() {
  const reasons = [
    {
      title: "Foco em Resultados de Negócio",
      description: "Não faço 'arte', faço ferramentas de venda. Cada pixel tem um propósito estratégico."
    },
    {
      title: "Projetos Sob Medida",
      description: "Nada de templates genéricos que todo mundo usa. Seu site será único como sua marca."
    },
    {
      title: "Processo Claro e Organizado",
      description: "Você saberá exatamente o que está acontecendo em cada etapa do projeto. Sem 'sumiços'."
    },
    {
      title: "Visão Além do Design",
      description: "Entendo de marketing, copy e vendas, e aplico isso no desenvolvimento do site."
    }
  ];

  return (
    <section className="section-padding bg-white border-y border-gray-100">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Por que escolher meu trabalho?
            </h2>
            <p className="text-gray-600">
              Diferente de agências que cobram caro e entregam pouco, ou freelancers que somem no meio do projeto, eu ofereço parceria e profissionalismo.
            </p>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
