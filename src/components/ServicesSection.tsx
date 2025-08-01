import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Palette, MessageSquare, Settings, Zap, ArrowRight, Smartphone, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "Entrega em 48h",
      subtitle: "Rapidez Garantida",
      description: "Sua landing page fica pronta em apenas 48 horas úteis. Processo otimizado para máxima agilidade sem comprometer a qualidade.",
      features: ["Entrega garantida em 48h", "Processo otimizado", "Sem atrasos"],
      badge: "Garantido"
    },
    {
      icon: Palette,
      title: "Design Profissional",
      subtitle: "Visual de Impacto",
      description: "Design moderno e responsivo que funciona perfeitamente em todos os dispositivos, criado para maximizar conversões.",
      features: ["Design responsivo", "Visual moderno", "Otimizado para conversão"],
      badge: "Premium"
    },
    {
      icon: MessageSquare,
      title: "Copy Persuasiva",
      subtitle: "Textos que Vendem",
      description: "Copywriting profissional focado em conversão, com gatilhos mentais e técnicas de persuasão para aumentar suas vendas.",
      features: ["Gatilhos mentais", "Técnicas de persuasão", "Foco em conversão"],
      badge: null
    },
    {
      icon: Zap,
      title: "Carregamento Rápido",
      subtitle: "Performance Otimizada",
      description: "Landing page otimizada para carregamento ultrarrápido, garantindo que seus visitantes não desistam antes de ver sua oferta.",
      features: ["Carregamento rápido", "Código otimizado", "Performance máxima"],
      badge: null
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      subtitle: "Perfeita no Celular",
      description: "Desenvolvida com foco no mobile, garantindo experiência perfeita em smartphones onde acontecem 70% das conversões.",
      features: ["Design mobile first", "Experiência otimizada", "Conversão no celular"],
      badge: null
    },
    {
      icon: CheckCircle,
      title: "Integração Completa",
      subtitle: "Conecta com Tudo",
      description: "Integramos com WhatsApp, e-mail marketing, pixels de rastreamento e ferramentas de analytics para máximo controle.",
      features: ["Integração WhatsApp", "Pixels de rastreamento", "Analytics inclusos"],
      badge: "Completa"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por Que Nossas Landing Pages
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Convertem Mais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra o que torna nossas landing pages as mais eficazes do mercado brasileiro.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 relative overflow-hidden">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{service.subtitle}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para ter uma landing page que realmente converte?
          </p>
          <button 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.me/553171547107?text=Ol%C3%A1!%20Quero%20uma%20landing%20page%20de%20alta%20convers%C3%A3o%20entregue%20em%2048h!', '_blank')}
          >
            Quero Minha Landing Page
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;