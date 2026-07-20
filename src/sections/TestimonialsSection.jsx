import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import testimonials from "../data/testimonials.json";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words that reinforce trust and collaboration"
          description="Use this space for peer feedback, manager endorsements, freelance client reviews, or internship recommendations."
        />
        <GlassCard className="overflow-hidden">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <p className="mx-auto max-w-3xl font-display text-2xl leading-relaxed text-white">
              “{testimonial.quote}”
            </p>
            <p className="mt-8 text-lg font-semibold text-cyan-200">{testimonial.name}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{testimonial.role}</p>
          </motion.div>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${item.name}`}
                className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-10 bg-cyan-300" : "w-2.5 bg-white/20"}`}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
