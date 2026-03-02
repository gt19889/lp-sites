import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogArticles } from "@/data/blogArticles";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      {/* Hero */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog da{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GT Agência
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo direto ao ponto sobre marketing digital, tráfego pago e crescimento de negócios.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Articles Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogArticles.map((article) => (
              <Card
                key={article.slug}
                className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <Link to={`/blog/${article.slug}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                      {article.category}
                    </Badge>
                  </div>
                </Link>
                <CardContent className="p-5">
                  <Link to={`/blog/${article.slug}`}>
                    <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.metaDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Ler artigo
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
