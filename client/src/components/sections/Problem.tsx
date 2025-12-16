import { AlertTriangle, XCircle, TrendingDown, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Problem() {
  const problems = [
    {
      icon: EyeOff,
      title: "Invisibilidade Online",
      description: "Clientes procuram seu serviço no Google, mas encontram seus concorrentes, não você.",
    },
    {
      icon: AlertTriangle,
      title: "Site Amador e Lento",
      description: "Sites feitos em construtores gratuitos que demoram para carregar e passam desconfiança.",
    },
    {
      icon: TrendingDown,
      title: "Baixa Conversão",
      description: "Visitantes entram, mas não entram em contato. Seu site é apenas um cartão de visitas digital sem estratégia.",
    },
    {
      icon: XCircle,
      title: "Dependência de Redes Sociais",
      description: "Se o Instagram cair hoje, como seus clientes te encontram? Não construa sua casa em terreno alugado.",
    },
  ];

  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Sua empresa perde oportunidades todos os dias sem um site profissional
          </h2>
          <p className="text-gray-600">
            No mundo digital de hoje, a credibilidade é medida em segundos. Se o seu site não transmite confiança, você está deixando dinheiro na mesa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4 text-red-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
