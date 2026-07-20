import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import Button from "../components/Button";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import profile from "../data/profile.json";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (values.message.trim().length < 12) errors.message = "Message should be at least 12 characters.";
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, form, publicKey);
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 800));
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s turn ideas into polished products"
          description="The form includes validation and EmailJS-ready integration. Add your environment variables to send messages directly from the site."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">Reach out directly</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Open for internships, freelance projects, and product teams that care about quality, accessibility, and thoughtful frontend engineering.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiMail className="text-cyan-300" size={20} />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiPhone className="text-cyan-300" size={20} />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <FiMapPin className="text-cyan-300" size={20} />
                <span>{profile.location}</span>
              </div>
            </div>
            <SocialLinks links={profile.socials} />
          </GlassCard>

          <GlassCard>
            <form onSubmit={handleSubmit} noValidate className="grid gap-5">
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <label key={field.name} className="grid gap-2">
                  <span className="text-sm font-medium text-slate-200">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                  />
                  {errors[field.name] ? <span className="text-sm text-rose-300">{errors[field.name]}</span> : null}
                </label>
              ))}
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                />
                {errors.message ? <span className="text-sm text-rose-300">{errors.message}</span> : null}
              </label>

              <div className="flex items-center gap-4">
                <Button type="submit" magnetic={false}>
                  <span className="flex items-center gap-2">
                    <FiSend />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </span>
                </Button>
                {status === "success" ? (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-emerald-300">
                    Message sent successfully.
                  </motion.span>
                ) : null}
                {status === "error" ? <span className="text-sm text-rose-300">Something went wrong.</span> : null}
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
