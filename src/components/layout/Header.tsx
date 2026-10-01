import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { content } from "../../content/en";
import logoIcon from "../../assets/logo-icon.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur border-b border-line shadow-sm"
            : "bg-white/0 border-b border-transparent"
        )}
      >
        <nav className="max-w-content mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between gap-6">
          {/* Logo + Brand Name */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoIcon} alt="" className="w-8 h-8 object-contain" />
            <span className="font-display font-extrabold text-lg text-ink tracking-tight">{content.meta.siteName}</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {content.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-[15px] font-medium transition-colors",
                    isActive ? "text-brand" : "text-body hover:text-brand"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Button as="a" href={content.headerCta.href} size="md">
              {content.headerCta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-ink hover:text-brand transition-colors p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-display text-2xl font-semibold text-ink hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button as="a" href={content.headerCta.href} size="lg">
              {content.headerCta.label}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
