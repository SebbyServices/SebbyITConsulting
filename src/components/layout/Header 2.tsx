import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { content } from "../../content/en";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.9;

    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="glass rounded-full px-8 py-4 flex items-center justify-between gap-8 backdrop-blur-xl">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 font-bold text-text">
            SebbyIT
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Button as="a" href={content.home.hero.primaryCta.href} size="sm">
              {content.home.hero.primaryCta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text hover:text-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen gap-8">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-2xl text-text hover:text-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              as="a"
              href={content.home.hero.primaryCta.href}
              size="lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {content.home.hero.primaryCta.label}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
