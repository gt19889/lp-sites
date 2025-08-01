import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import landingPage1 from "@/assets/showcase/landing-page-1.png";
import landingPage2 from "@/assets/showcase/landing-page-2.png";
import landingPage3 from "@/assets/showcase/landing-page-3.png";

const ShowcaseSection = () => {
  const showcaseItems = [
    {
      image: landingPage1,
      title: "E-commerce Premium",
      description: "Landing page para loja de produtos digitais com foco em conversão",
      conversion: "87%",
      category: "E-commerce"
    },
    {
      image: landingPage2,
      title: "SaaS Profissional", 
      description: "Página de captura para software empresarial com design clean",
      conversion: "92%",
      category: "SaaS"
    },
    {
      image: landingPage3,
      title: "Curso Online",
      description: "Landing page educacional com alta taxa de conversão em vendas",
      conversion: "89%",
      category: "Educação"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Exemplos de 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Landing Pages de Alto Impacto
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns exemplos do nosso trabalho que estão gerando resultados excepcionais para nossos clientes.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  {item.conversion}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Taxa de Conversão</span>
                  <span className="font-bold text-green-600">{item.conversion}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Quer uma landing page como essas para o seu negócio?
          </p>
          <button 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.me/553171547107?text=Ol%C3%A1!%20Quero%20uma%20landing%20page%20de%20alta%20convers%C3%A3o%20como%20os%20exemplos%20que%20vi!', '_blank')}
          >
            Quero Minha Landing Page Agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;