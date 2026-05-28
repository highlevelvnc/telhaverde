"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { staggerReveal, observeReveal, refreshTriggers } from "@/lib/scrollReveal";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";

const ABOUT_IMAGE = "/portfolio/telhado-panoramica.jpg";

const VALUES = [
  "Especialistas exclusivos em telhados — não somos faz-tudo",
  "Trabalho rigoroso, com materiais e técnicas certas para cada cobertura",
  "Acabamento cuidado, áreas protegidas e local limpo no fim",
  "Falamos consigo do orçamento à entrega — sem surpresas",
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = staggerReveal(sectionRef.current, ".ab-text [data-reveal]", 0.08);
    const c2 = observeReveal(sectionRef.current, ".ab-img-wrap[data-reveal]");

    const ctx = gsap.context(() => {
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      }
    }, sectionRef);
    refreshTriggers();

    return () => {
      c1();
      c2();
      ctx.revert();
    };
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="relative section bg-white">
      <div className="container-tight grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="ab-text lg:col-span-6">
          <p data-reveal="up" className="eyebrow">Sobre a Telha Verde</p>
          <h2 data-reveal="up" className="mt-5 text-display-lg font-extrabold text-forest-900 text-balance">
            A sua casa protegida por quem percebe de telhados
          </h2>
          <p data-reveal="up" className="mt-6 text-base leading-relaxed text-ink-500">
            A Telhados Telha Verde é uma empresa especializada em telhados e coberturas
            na Póvoa de Varzim. Focamo-nos no que sabemos fazer melhor: reparar,
            impermeabilizar, limpar e renovar telhados com qualidade, segurança e
            acabamento duradouro.
          </p>
          <p data-reveal="up" className="mt-4 text-base leading-relaxed text-ink-500">
            Trabalhamos com moradias, prédios, armazéns e espaços comerciais. Sejam
            pequenas intervenções pontuais ou renovações completas, garantimos sempre
            a mesma exigência — porque o telhado é a primeira linha de proteção da sua casa.
          </p>

          <ul data-reveal="up" className="mt-8 space-y-3">
            {VALUES.map((v) => (
              <li key={v} className="flex items-start gap-3 text-sm text-ink-700">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-900 text-white">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {v}
              </li>
            ))}
          </ul>

          <div data-reveal="up" className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              Falar connosco
              <ArrowRightIcon />
            </a>
            <a href="#trabalhos" className="btn-ghost">
              Ver trabalhos
            </a>
          </div>
        </div>

        <div data-reveal="right" className="ab-img-wrap relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-forest-900 shadow-card-hover">
            <div ref={imgRef} className="absolute inset-0 will-change-transform">
              <Image
                src={ABOUT_IMAGE}
                alt="Vista panorâmica de telhados renovados na Póvoa de Varzim"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover scale-110"
              />
            </div>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-8 -left-6 hidden w-72 rounded-2xl border border-line bg-white p-6 shadow-card-hover sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-label-wide text-terracotta-600">
              Compromisso
            </p>
            <p className="mt-3 font-display text-base font-bold leading-snug text-forest-900">
              &ldquo;Cada telhado que reparamos é também a nossa assinatura.&rdquo;
            </p>
            <p className="mt-3 text-xs text-ink-500">— Telhados Telha Verde</p>
          </div>

          <div aria-hidden className="absolute -top-6 -right-4 hidden h-24 w-24 rounded-2xl border border-line bg-white shadow-card sm:block">
            <div className="flex h-full flex-col items-center justify-center">
              <span className="font-display text-xl font-extrabold text-terracotta-500">24h</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-label-wide text-ink-500">
                Resposta rápida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
