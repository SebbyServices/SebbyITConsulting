import { useState, type FormEvent } from "react";
import { content } from "../../content/en";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    _gotcha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot
    if (formData._gotcha) return;

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setState("error");
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setState("error");
      return;
    }

    setState("submitting");

    try {
      const response = await fetch(content.meta.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "",
          phone: formData.phone || "",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setState("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          _gotcha: "",
        });
      } else {
        setState("error");
      }
    } catch (error) {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-text">
          {content.contact.form.successHeading}
        </h3>
        <p className="text-base text-muted">{content.contact.form.successBody}</p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-text">
          {content.contact.form.errorHeading}
        </h3>
        <p className="text-base text-muted">{content.contact.form.errorBody}</p>
        <Button
          onClick={() => setState("idle")}
          variant="secondary"
        >
          Try again
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input type="hidden" name="_gotcha" value={formData._gotcha} onChange={handleChange} />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          {content.contact.form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-white/10 text-text placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-teal/50"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          {content.contact.form.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-white/10 text-text placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-teal/50"
          required
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
          {content.contact.form.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-white/10 text-text placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-teal/50"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
          {content.contact.form.phoneLabel}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-white/10 text-text placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-teal/50"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          {content.contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={content.contact.form.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-bg-2 border border-white/10 text-text placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-teal/50 resize-none"
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={state === "submitting"}
        className={cn(state === "submitting" && "opacity-50 cursor-not-allowed")}
      >
        {state === "submitting"
          ? content.contact.form.submittingLabel
          : content.contact.form.submitLabel}
      </Button>
    </form>
  );
}
