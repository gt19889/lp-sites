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
  return;
};
export default MethodologySection;