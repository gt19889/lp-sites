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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossa 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Metodologia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4 passos estratégicos para transformar visitantes em clientes fiéis usando IA e automação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologySteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <Badge className="mx-auto mb-2 bg-muted text-muted-foreground">{step.number}</Badge>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  {step.description}
                </CardDescription>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {step.aiFeature}
                </Badge>
              </CardContent>
              
              {index < methodologySteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MethodologySection;