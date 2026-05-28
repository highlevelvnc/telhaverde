"use client";

import { useEffect, useRef } from "react";
import { observeReveal, staggerReveal } from "@/lib/scrollReveal";
import {
  ArrowRightIcon,
  DropletIcon,
  HammerIcon,
  RoofIcon,
  SparklesIcon,
  TileIcon,
  WhatsAppIcon,
  WrenchIcon,
} from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";

const SERVICES = [
  {
    title: "Reparação de Telhados",
    description:
      "Identificamos a origem do problema e reparamos com método: telhas partidas, cumeeiras soltas, estrutura danificada.",
    Icon: RoofIcon,
  },
  {
    title: "Limpeza de Telhados",
    description:
      "Remoção de musgo, líquenes e sujidade. Aplicação de produtos adequados que protegem e prolongam a vida das telhas.",
    Icon: SparklesIcon,
  },
  {
    title: "Impermeabilização",
    description:
      "Telas, membranas e produtos certos para coberturas planas e inclinadas. Acabou-se a humidade e infiltrações.",
    Icon: DropletIcon,
  },
  {
    title: "Substituição de Telhas",
    description:
      "Substituição parcial ou total. Marca, formato e cor à medida do telhado original — ou modernização completa.",
    Icon: TileIcon,
  },
  {
    title: "Reparação de Infiltrações",
    description:
      "Diagnóstico rigoroso do ponto de entrada da água — chaminés, claraboias, beirais — e selagem definitiva.",
    Icon: HammerIcon,
  },
  {
    title: "Manutenção de Coberturas",
    description:
      "Inspeção periódica, limpeza de caleiras, retoques preventivos. Evita reparações caras no futuro.",
    Icon: WrenchIcon,
  },
] as const;

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const c1 = observeReveal(sectionRef.current, ".services-head [data-reveal]");
    const c2 = staggerReveal(gridRef.current, "[data-reveal]", 0.08);
    return () => {
      c1();
      c2();
    };
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="relative section bg-white">
      <div className="container-tight">
        <div className="services-head mx-auto max-w-2xl text-center">
          <p data-reveal="up" className="eyebrow justify-center">Serviços</p>
          <h2 data-reveal="up" className="mt-5 text-display-lg font-extrabold text-forest-900 text-balance">
            Tudo o que o seu telhado precisa
          </h2>
          <p data-reveal="up" className="mt-5 text-base leading-relaxed text-ink-500">
            Do pequeno reparo à renovação completa, tratamos do seu telhado com
            o cuidado, a técnica e os materiais adequados ao clima da costa portuguesa.
          </p>
        </div>

        <ul ref={gridRef} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }, i) => (
            <li key={title} data-reveal="up">
              <div className="service-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-terracotta-400 hover:shadow-card-hover">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-terracotta-500/0 via-terracotta-500/0 to-terracotta-100/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Canto decorativo terracota */}
                <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-14 w-14 overflow-hidden">
                  <span className="absolute -right-7 -top-7 h-14 w-14 rotate-45 bg-terracotta-500/10 transition-colors duration-300 group-hover:bg-terracotta-500/25" />
                </span>
                <span aria-hidden className="absolute right-6 top-6 font-display text-xs font-semibold tabular-nums tracking-label-wide text-line-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-lg bg-surface-tint text-forest-900 shadow-soft ring-1 ring-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-forest-900 group-hover:text-white group-hover:shadow-card group-hover:ring-forest-900">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="relative mt-7 text-xl font-bold text-forest-900">{title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-500">{description}</p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest-900 transition-colors group-hover:text-terracotta-600"
                >
                  <span>Pedir orçamento</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <span aria-hidden className="absolute bottom-0 left-7 right-7 h-px scale-x-0 origin-left bg-gradient-to-r from-terracotta-500 to-terracotta-300 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <p className="text-sm text-ink-500">
            Não vê o serviço que precisa? <span className="font-semibold text-forest-900">Falamos consigo.</span>
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon className="h-4 w-4" />
            Pedir orçamento
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
