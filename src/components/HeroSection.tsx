import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Zap, MessageSquare, Clock, Brain } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img src="/lovable-uploads/7f8baf30-c892-41bc-8982-e7d5e40dc5a0.png" alt="GT Gestão Digital" className="h-20 md:h-24 mx-auto mb-6" />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Landing Pages de Alta Conversão
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Landing Page que
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Converte{" "}
            </span>
            em 48 Horas
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>De R$ 997 por apenas R$ 597</strong> ou 12x de R$ 59,90. 
            Landing page profissional <strong>entregue em 48 horas</strong> garantido.
          </p>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Clock className="w-5 h-5 text-primary" />
              <span>Entrega em 48h</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Target className="w-5 h-5 text-primary" />
              <span>Alta conversão</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Design profissional</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.open('https://wa.me/553171547107?text=Ol%C3%A1!%20Quero%20uma%20landing%20page%20de%20alta%20convers%C3%A3o%20entregue%20em%2048h!', '_blank')}>
              Quero Minha Landing Page
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p className="mb-4">✅ Mais de 200 landing pages entregues</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-60">
              <span className="bg-secondary px-3 py-1 rounded-md">48h Garantido</span>
              <span className="bg-secondary px-3 py-1 rounded-md">Alta Conversão</span>
              <span className="bg-secondary px-3 py-1 rounded-md">Suporte Completo</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;