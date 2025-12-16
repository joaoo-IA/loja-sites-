import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, ShoppingCart, User, Settings, Phone, PenTool } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Site Institucional",
      description: "A vitrine digital da sua empresa. Ideal para apresentar seus serviços e história.",
    },
    {
      icon: ShoppingCart,
      title: "Landing Page de Vendas",
      description: "Página focada em uma única ação: vender seu produto ou serviço.",
    },
    {
      icon: User,
      title: "Portfólio Profissional",
      description: "Para profissionais liberais que querem destacar sua carreira e atrair clientes.",
    },
    {
      icon: Settings,
      title: "Manutenção & Melhorias",
      description: "Atualizações, correções e otimizações em sites já existentes.",
    },
    {
      icon: Phone,
      title: "Integrações",
      description: "Botão de WhatsApp, formulários de email, chat online e automações.",
    },
    {
      icon: PenTool,
      title: "Redesign de Sites",
      description: "Modernização visual e técnica de sites antigos que não convertem.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Como posso te ajudar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções completas para cada etapa da sua jornada digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-100 bg-white group cursor-default">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
