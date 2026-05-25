import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, Phone, MapPin, MessageCircle } from "lucide-react";

import emailjs from "@emailjs/browser";

import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../animations/FadeIn";

export default function ContactSection() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_kedtpjo",
        "template_lchcltg",
        formRef.current,
        "jZNeV5vVEfXsxeUFH",
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);

          formRef.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
        (error) => {
          setLoading(false);
          console.log("EMAILJS ERROR :", error);
        },
      );
  };

  return (
    <FadeIn delay={0.3} direction="down">
      <section
        id="contact"
        className="relative mt-32 px-6 overflow-hidden bg-gradient-to-b from-[#070B14] to-[#050816]"
      >
        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn delay={0.2}>
            <SectionTitle title="Contact" />
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl mt-8"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-14 p-8 lg:p-8">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-300 text-sm mb-8">
                  <Sparkles size={15} />
                  Disponible pour vos projets
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Construisons quelque chose
                  <span className="block text-red-500">d'exception</span>
                </h3>

                <p className="text-gray-400 text-base leading-8 mt-8">
                  Vous avez un projet, une idée ou une collaboration ?
                  Contactez-moi pour créer une expérience moderne, performante
                  et élégante.
                </p>

                {/* infos */}
                <div className="mt-10">
                  {/* grid infos */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* email */}
                    <a
                      href="mailto:raoelisonkanto@gmail.com"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 hover:border-red-500/30 transition"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                        <Mail size={18} className="text-red-400" />
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-500">Email</p>
                        <p className="text-gray-200 group-hover:text-white">
                          raoelisonkanto@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* phone */}
                    <a
                      href="tel:+261345703232"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 hover:border-blue-500/30 transition"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Phone size={18} className="text-blue-400" />
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-500">Téléphone</p>
                        <p className="text-gray-200">034 57 032 32</p>
                      </div>
                    </a>

                    {/* whatsapp */}
                    <a
                      href="https://wa.me/261000000000"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 hover:border-green-500/30 transition"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <MessageCircle size={18} className="text-green-400" />
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-500">WhatsApp</p>
                        <p className="text-gray-200">034 57 32 32</p>
                      </div>
                    </a>

                    {/* linkedin */}
                    <a
                      href="https://www.linkedin.com/in/kanto-raoelison-88209b200/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 hover:border-cyan-500/30 transition"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-cyan-400"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-500">LinkedIn</p>
                        <p className="text-gray-200">Voir le profil</p>
                      </div>
                    </a>
                  </div>

                  {/* localisation */}
                  <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <MapPin size={18} className="text-orange-400" />
                    </div>

                    <div className="text-sm">
                      <p className="text-gray-500">Localisation</p>
                      <p className="text-gray-200">Antananarivo, Madagascar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative rounded-[32px] border border-white/10 bg-[#0F0F11]/80 p-8 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 rounded-[32px]" />

                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Envoyer un message
                    </h4>

                    <p className="text-gray-400 mb-8">
                      Réponse rapide et accompagnement personnalisé.
                    </p>

                    {/* FORM */}
                    <form
                      ref={formRef}
                      onSubmit={sendEmail}
                      className="space-y-5 text-sm"
                    >
                      {/* nom */}
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Nom complet"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 text-white placeholder:text-gray-500 outline-none focus:border-red-500/40 transition"
                      />

                      {/* email */}
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Adresse email"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 text-white placeholder:text-gray-500 outline-none focus:border-red-500/40 transition"
                      />

                      {/* sujet */}
                      <input
                        type="text"
                        name="subject"
                        placeholder="Sujet"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2 text-white placeholder:text-gray-500 outline-none focus:border-red-500/40 transition"
                      />

                      {/* message */}
                      <textarea
                        rows={6}
                        name="message"
                        placeholder="Votre message..."
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-gray-500 outline-none resize-none focus:border-red-500/40 transition"
                      />

                      {/* success */}
                      {success && (
                        <div className="text-green-400 text-sm">
                          Message envoyé avec succès.
                        </div>
                      )}

                      {/* button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="group w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(229,9,20,0.25)]"
                      >
                        {loading ? "Envoi..." : "Envoyer le message"}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
}
