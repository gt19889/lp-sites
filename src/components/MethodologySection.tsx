import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
const MethodologySection = () => {
  const methodologySteps = [{
    icon: Target,
    number: "01",
    title: "Captar",
    description: "A GT Digital atrai seu público ideal através de SEO estratégico e campanhas de tráfego pago otimizadas para gerar leads qualificados.",
    aiFeature: "Estratégias de captação da GT Digital",
    color: "from-red-500 to-orange-500"
  }, {
    icon: Users,
    number: "02",
    title: "Engajar",
    description: "O agente de IA faz o pré-atendimento, responde dúvidas frequentes e qualifica leads de forma inteligente e personalizada 24/7.",
    aiFeature: "Agente de IA para pré-atendimento",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: TrendingUp,
    number: "03",
    title: "Converter",
    description: "O agente conduz o processo de venda diretamente ou direciona para um humano especializado ou página de checkout para finalizar.",
    aiFeature: "IA de vendas inteligente",
    color: "from-green-500 to-emerald-500"
  }, {
    icon: Heart,
    number: "04",
    title: "Fidelizar",
    description: "Mantemos clientes engajados e geramos indicações através de relacionamento personalizado e valor contínuo.",
    aiFeature: "Automação de relacionamento inteligente",
    color: "from-purple-500 to-pink-500"
  }];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Metodologia
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}C.E.C.F
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso processo comprovado de 4 etapas para transformar visitantes em clientes fiéis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`} />
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-2`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                      {step.number}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-sm mb-4">
                    {step.description}
                  </CardDescription>
                  
                  <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-xs font-medium text-primary">
                      🤖 {step.aiFeature}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.me/553171547107?text=Quero%20conhecer%20mais%20sobre%20a%20metodologia%20C.E.C.F!', '_blank')}
          >
            Quero Aplicar a Metodologia C.E.C.F
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default MethodologySection;