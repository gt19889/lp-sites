import { Link, useLocation } from "react-router-dom";

const BlogHeader = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Contato", href: "https://wa.me/553171547107" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/7f8baf30-c892-41bc-8982-e7d5e40dc5a0.png"
            alt="GT Gestão Digital"
            className="h-8"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/553171547107?text=Ol%C3%A1!%20Vim%20pelo%20blog%20e%20quero%20um%20diagn%C3%B3stico%20gratuito!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Falar com especialista
        </a>
      </div>
    </header>
  );
};

export default BlogHeader;
