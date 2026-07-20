import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiExternalLink } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import SectionHeading from "../components/SectionHeading";
import certifications from "../data/certifications.json";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Proof of continuous learning and deliberate skill-building"
          description="These cards are set up to showcase verifiable credentials with space for logos, preview art, and direct links."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <GlassCard className="group h-full">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-48 w-full rounded-[24px] border border-white/10 object-cover"
                />
                <div className="mt-6 flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 text-cyan-200">
                    <FiAward size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{certificate.title}</h3>
                    <p className="mt-2 text-slate-300">{certificate.organization}</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
                      <FiCalendar size={14} />
                      {certificate.date}
                    </p>
                  </div>
                </div>
                <a
                  href={certificate.credentialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  View Credential
                  <FiExternalLink />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
