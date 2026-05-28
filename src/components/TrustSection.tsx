"use client";

import { useEffect, useRef } from "react";
import { staggerReveal } from "@/lib/scrollReveal";
import { ClockIcon, ShieldCheckIcon, AwardIcon, WhatsAppIcon, RoofIcon, HouseIcon } from "@/components/ui/Icons";

const ITEMS = [
  {
    title: "Atendimento rápido",
    description:
      "Respondemos a pedidos de orçamento em horas. Se houver infiltração, deslocamo-nos com prioridade.",
    Icon: ClockIcon,
  },
  {
    title: "Serviço profissional",
    description:
      "Equipa experiente, materiais adequados e técnicas corretas para cada tipo de telhado e cobertura.",
    Icon: AwardIcon,
  },
  {
    title: "Soluções duradouras",
    description:
      "Não fazemos remendos rápidos — fazemos reparações que duram, com acabamento limpo e selado.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Orçamento pelo WhatsApp",
    description:
      "Envie-nos uma foto do problema. Damos uma estimativa inicial sem deslocação e marcamos visita.",
    Icon: WhatsAppIcon,
  },
  {
    title: "Experiência em telhados",
    description:
      "Reparação, limpeza, impermeabilização, substituição de telhas — só fazemos telhados, fazemos bem.",
    Icon: RoofIcon,
  },
  {
    title: "Residencial e comercial",
    description:
      "Moradias, prédios, armazéns e espaços comerciais — todos os tipos de cobertura e tamanho de obra.",
    Icon: HouseIcon,
  },
] as const;

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => staggerReveal(sectionRef.current, "[data-reveal]", 0.1), []);

  return (
    <section id="diferenciais" ref={sectionRef} className="relative bg-surface-tint py-20 sm:py-24 lg:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal="up" className="eyebrow justify-center">Porquê escolher-nos</p>
          <h2 data-reveal="up" className="mt-5 text-display-lg font-extrabold text-forest-900 text-balance">
            Confiança, segurança e qualidade em cada telhado
          </h2>
          <p data-reveal="up" className="mt-5 text-base leading-relaxed text-ink-500">
            Especialistas que só fazem telhados, com proximidade local e o
            cuidado de quem assina cada obra.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ title, description, Icon }, i) => (
            <li key={title} data-reveal="up">
              <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-terracotta-300 hover:shadow-card">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-terracotta-100/0 blur-2xl transition-colors duration-500 group-hover:bg-terracotta-100"
                />
                <span className="absolute right-6 top-6 font-display text-xs font-semibold tabular-nums text-line-muted">
                  0{i + 1}
                </span>
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest-900 text-white shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:bg-terracotta-500 group-hover:shadow-card">
                  <Icon className="h-6 w-6" />
                  <span aria-hidden className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
                </span>
                <h3 className="text-lg font-bold text-forest-900">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{description}</p>
                <span aria-hidden className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-terracotta-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
