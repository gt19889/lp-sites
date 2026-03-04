import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, User, ArrowRight } from "lucide-react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { getArticleBySlug } from "@/data/blogArticles";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article Content */}
          <article className="lg:col-span-2">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-muted-foreground mb-6 text-lg">{article.metaDescription}</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span>Atualizado em {article.publishedAt}</span>
            </div>

            {/* Cover image */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full rounded-lg mb-8 object-cover max-h-[400px]"
            />

            {/* Article body */}
            <div
              className="prose prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:mb-2
                prose-table:border prose-table:border-border
                prose-th:bg-secondary prose-th:p-3 prose-th:text-left prose-th:text-foreground prose-th:font-semibold
                prose-td:p-3 prose-td:border-t prose-td:border-border prose-td:text-muted-foreground
                [&_.table-wrapper]:overflow-x-auto [&_.table-wrapper]:mb-6 [&_.table-wrapper]:rounded-lg [&_.table-wrapper]:border [&_.table-wrapper]:border-border
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA Final */}
            {article.cta && (
              <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {article.cta.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {article.cta.description}
                </p>
                <a
                  href={`https://wa.me/5531984005700?text=${encodeURIComponent(article.cta.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {article.cta.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            )}

            {/* Author / Published */}
            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              Publicado por {article.author} · Belo Horizonte · Atualizado em {article.publishedAt}
            </div>

            {/* Back */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 mt-6 text-primary hover:underline text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>
          </article>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogArticle;
