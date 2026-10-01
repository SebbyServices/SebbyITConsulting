import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { content } from "../../content/en";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const topicValues: readonly string[] = content.contact.form.topics.map((t) => t.value);

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const initialTopic = searchParams.get("topic") ?? "";
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: topicValues.includes(initialTopic) ? initialTopic : "",
    company: "",
    phone: "",
    message: "",
    _gotcha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
          topic:
            content.contact.form.topics.find((t) => t.value === formData.topic)?.label ?? "",
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
          topic: "",
          company: "",
          phone: "",
          message: "",
          _gotcha: "",
        });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          {content.contact.form.successHeading}
        </h3>
        <p className="text-lg text-body">{content.contact.form.successBody}</p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          {content.contact.form.errorHeading}
        </h3>
        <p className="text-lg text-body">{content.contact.form.errorBody}</p>
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

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-base font-semibold text-ink mb-2">
          {content.contact.form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="field"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-base font-semibold text-ink mb-2">
          {content.contact.form.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="field"
          required
        />
      </div>

      {/* Topic */}
      <div>
        <label htmlFor="topic" className="block text-base font-semibold text-ink mb-2">
          {content.contact.form.topicLabel}
        </label>
        <select
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="field"
        >
          <option value="">Choose one</option>
          {content.contact.form.topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-base font-semibold text-ink mb-2">
          {content.contact.form.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="field"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-base font-semibold text-ink mb-2">
          {content.contact.form.phoneLabel}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="field"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-base font-semibold text-ink mb-2">
          {content.contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={content.contact.form.messagePlaceholder}
          className="field resize-y"
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={state === "submitting"}
        className={cn("w-full sm:w-auto", state === "submitting" && "opacity-60 cursor-not-allowed")}
      >
        {state === "submitting"
          ? content.contact.form.submittingLabel
          : content.contact.form.submitLabel}
      </Button>

      {/* Honeypot (last child so it doesn't add spacing above the first field) */}
      <input type="hidden" name="_gotcha" value={formData._gotcha} onChange={handleChange} />
    </form>
  );
}
