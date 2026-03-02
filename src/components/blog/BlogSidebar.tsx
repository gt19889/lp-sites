import { Link } from "react-router-dom";
import { MessageSquare, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogArticles, blogCategories } from "@/data/blogArticles";

const BlogSidebar = () => {
  return (
    <aside className="space-y-6">
      {/* CTA Diagnóstico */}
      <Card className="bg-gradient-to-br from-primary/20 to-accent/10 border-primary/30">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            Diagnóstico Gratuito
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Descubra o que está travando o crescimento do seu negócio. Sem compromisso.
          </p>
          <a
            href="https://wa.me/553171547107?text=Ol%C3%A1!%20Quero%20meu%20diagn%C3%B3stico%20gratuito%20de%20marketing!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-bold transition-colors"
          >
            Quero meu diagnóstico →
          </a>
        </CardContent>
      </Card>

      {/* Categorias */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Tag className="w-4 h-4 text-primary" />
            Categorias
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2">
            {blogCategories.map((cat) => (
              <li key={cat}>
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Artigos Recentes */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Artigos Recentes</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="block group"
            >
              <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h4>
              <span className="text-xs text-muted-foreground">{article.category}</span>
            </Link>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
};

export default BlogSidebar;
