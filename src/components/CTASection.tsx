"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { staggerReveal, refreshTriggers } from "@/lib/scrollReveal";
import { ArrowRightIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const c1 = staggerReveal(sectionRef.current, "[data-reveal]", 0.1);
    const ctx = gsap.context(() => {
      gsap.to(".cta-shimmer-1", {
        x: "+=120",
        y: "-=60",
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".cta-shimmer-2", {
        x: "-=140",
        y: "+=80",
        duration: 18,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);
    refreshTriggers();
    return () => {
      c1();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-forest-950 py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-forest opacity-30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-forest-radial" />
      <div
        aria-hidden
        className="cta-shimmer-1 pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-terracotta-500/25 blur-[120px] will-change-transform"
      />
      <div
        aria-hidden
        className="cta-shimmer-2 pointer-events-none absolute -bottom-32 right-1/4 h-[26rem] w-[26rem] rounded-full bg-forest-400/25 blur-[120px] will-change-transform"
      />

      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container-tight relative">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal="up" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label-wide text-terracotta-200">
            <span className="h-px w-10 bg-terracotta-400" />
            Pronto a começar
          </p>

          <h2 data-reveal="up" className="mt-6 font-display text-display-xl font-extrabold leading-[1.05] text-white text-balance">
            Precisa reparar, limpar ou impermeabilizar o seu telhado?
          </h2>

          <p data-reveal="up" className="mt-7 text-lg leading-relaxed text-white/85">
            Fale com a Telhados Telha Verde e peça já o seu orçamento.
            Resposta rápida, sem compromisso e com a clareza que merece.
          </p>

          <div data-reveal="up" className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-card-hover transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir orçamento pelo WhatsApp
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${COMPANY.phoneDigits}`}
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              <PhoneIcon className="h-4 w-4" />
              {COMPANY.phone}
            </a>
          </div>

          <ul data-reveal="up" className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/85">
            {[
              "Diagnóstico no local",
              "Sem compromisso",
              "Resposta em 24h",
              "Póvoa de Varzim e arredores",
            ].map((g) => (
              <li key={g} className="inline-flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-500/25 ring-1 ring-terracotta-300/40">
                  <CheckIcon className="h-3 w-3 text-terracotta-200" />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
