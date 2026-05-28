import { Link } from "react-router-dom";
import { Mail, Phone, Share2 } from "lucide-react";
import { content } from "../../content/en";

export function Footer() {
  return (
    <footer className="bg-bg-2 border-t border-white/10">
      <div className="max-w-content mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo + Tagline + Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-text">SebbyIT</h3>
            <p className="text-sm text-muted">{content.footer.tagline}</p>
            <p className="text-xs text-muted/70">{content.footer.location}</p>
          </div>

          {/* Column 2 & 3: Link Columns */}
          {content.footer.columns.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-sm uppercase tracking-widest text-teal font-medium mb-4">
                {column.heading}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted hover:text-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact + Social */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-teal font-medium mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${content.meta.contact.email}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a
                href={`tel:${content.meta.contact.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors"
              >
                <Phone size={16} />
                <span>Phone</span>
              </a>
              <a
                href={content.meta.contact.linkedinPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors"
              >
                <Share2 size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>{content.footer.legal}</p>
          <p className="hidden md:block">Built with care</p>
        </div>
      </div>
    </footer>
  );
}
