"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon, MapPinIcon } from "@/components/ui/Icons";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { gsap } from "@/lib/gsap";
import { staggerReveal, refreshTriggers } from "@/lib/scrollReveal";

const HERO_IMAGE = "/portfolio/hero-telhado-novo.jpg";

const HIGHLIGHTS = [
  "Orçamento sem compromisso",
  "Atendimento rápido na Póvoa de Varzim",
  "Acabamento garantido",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = staggerReveal(sectionRef.current, "[data-reveal]", 0.08);

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: -8,
          opacity: 0.65,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      gsap.to(blob1Ref.current, {
        yPercent: -25,
        x: 20,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 0.7 },
      });
      gsap.to(blob2Ref.current, {
        yPercent: 20,
        x: -30,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 0.9 },
      });

      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: "expo.out", delay: 0.6 });
      }
    }, sectionRef);

    refreshTriggers();
    return () => {
      c1();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950 pt-28 text-white"
    >
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src={HERO_IMAGE}
          alt="Telhado renovado na Póvoa de Varzim"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/85 via-forest-950/55 to-forest-900/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/85 via-transparent to-forest-950/40" />
      <div className="absolute inset-0 -z-10 bg-grid-forest opacity-25" />

      <div
        ref={blob1Ref}
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-terracotta-500/25 blur-[120px] will-change-transform"
      />
      <div
        ref={blob2Ref}
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-24 h-[24rem] w-[24rem] rounded-full bg-forest-400/20 blur-[120px] will-change-transform"
      />

      <div className="container-tight relative grid grid-cols-1 items-center gap-14 pb-24 lg:grid-cols-12 lg:pb-32">
        <div ref={contentRef} className="lg:col-span-7">
          <p
            data-reveal="up"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label-wide text-terracotta-200"
          >
            <span className="h-px w-10 bg-terracotta-400" />
            <MapPinIcon className="h-3.5 w-3.5" />
            Póvoa de Varzim · Especialistas em Telhados
          </p>

          <h1 className="mt-6 text-display-2xl font-extrabold leading-[1.05] text-white text-balance">
            <span data-reveal="up" className="block">Especialistas em</span>
            <span data-reveal="up" className="block">
              Reparação e Manutenção
            </span>
            <span data-reveal="up" className="block">
              de{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-terracotta-300 via-terracotta-200 to-terracotta-300 bg-clip-text text-transparent">
                  Telhados
                </span>
                <span ref={lineRef} className="absolute -bottom-1 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-300" />
              </span>
            </span>
          </h1>

          <p data-reveal="up" className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
            Soluções profissionais para telhados, infiltrações, impermeabilização e
            manutenção na Póvoa de Varzim e arredores. Trabalho rigoroso, acabamento
            duradouro e resposta rápida.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal="up"
              className="btn bg-[#25D366] text-white shadow-card hover:-translate-y-0.5 hover:bg-[#1ebe5a] hover:shadow-card-hover"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir orçamento no WhatsApp
              <ArrowRightIcon />
            </a>
            <a
              href="#servicos"
              data-reveal="up"
              className="btn border-2 border-white/30 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              Ver serviços
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                data-reveal="up"
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-500/30 ring-1 ring-terracotta-300/40">
                  <CheckIcon className="h-3 w-3 text-terracotta-200" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative ml-auto w-full max-w-md">
            <div
              data-reveal="up"
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-7 shadow-card-hover backdrop-blur-md"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-terracotta-400/30 blur-3xl" aria-hidden />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta-400" />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-label-wide text-terracotta-200">
                  Disponível agora
                </p>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold leading-snug text-white">
                Proteja a sua casa de infiltrações e desgaste.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Reparação, limpeza, impermeabilização e substituição de telhas
                — com garantia de um trabalho que dura.
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "24h", v: "Resposta" },
                  { k: "100%", v: "Compromisso" },
                  { k: "Local", v: "Póvoa Varzim" },
                ].map((s) => (
                  <div key={s.v} className="rounded-lg bg-white/[0.06] p-3 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                    <dt className="font-display text-lg font-extrabold text-white">{s.k}</dt>
                    <dd className="mt-1 text-[10px] uppercase tracking-label-wide text-terracotta-200/85">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={`tel:${COMPANY.phoneDigits}`}
                className="mt-6 flex items-center gap-3 rounded-lg border border-white/10 bg-forest-950/50 px-4 py-3 transition-all duration-300 hover:border-terracotta-400/40 hover:bg-forest-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-[#25D366]/30">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-label-wide text-white/60">Fale connosco já</p>
                  <p className="font-display text-base font-bold text-white">
                    {COMPANY.phone}
                  </p>
                </div>
                <span className="ml-auto text-terracotta-200">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div aria-hidden className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md" />
            <div aria-hidden className="absolute -right-4 top-10 h-16 w-16 rounded-full bg-terracotta-400/20 blur-2xl" />
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <a
        href="#confianca"
        aria-label="Continuar para a próxima secção"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-label-wide text-white/70 hover:text-white sm:flex"
      >
        <span>Descobrir</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-3 w-px animate-pulse-soft bg-white" />
        </span>
      </a>
    </section>
  );
}
