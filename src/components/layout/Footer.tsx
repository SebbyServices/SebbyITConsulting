import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { content } from "../../content/en";
import logoIcon from "../../assets/logo-icon.png";

export function Footer() {
  const { contact } = content.meta;
  return (
    <footer className="bg-ink text-slate-300">
      <div className="max-w-content mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoIcon} alt="" className="w-9 h-9 object-contain" />
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                {content.meta.siteName}
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed">{content.footer.tagline}</p>
            <p className="text-sm text-slate-400">{content.footer.location}</p>
          </div>

          {/* Link columns */}
          {content.footer.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white mb-4">
                {column.heading}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-[15px] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:+${contact.phoneRaw}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={18} /> {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.linkedinCompany} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <LinkedInIcon /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-sm text-slate-400">
          <p>{content.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
