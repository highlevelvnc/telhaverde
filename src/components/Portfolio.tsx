"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { observeReveal, staggerReveal, refreshTriggers } from "@/lib/scrollReveal";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";
import { BeforeAfter } from "@/components/BeforeAfter";

type Item = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  span: "tall" | "wide" | "square";
};

const ITEMS: Item[] = [
  {
    src: "/portfolio/telhado-terracota-acabado.jpg",
    alt: "Telhado em telha terracota acabado, com chaminé e cumeeira selada",
    tag: "Substituição de telhas",
    title: "Renovação completa — Póvoa de Varzim",
    span: "tall",
  },
  {
    src: "/portfolio/cumeeira-renovada.jpg",
    alt: "Cumeeira renovada num telhado em telha lusa nova",
    tag: "Cumeeira",
    title: "Cumeeira selada em telha nova",
    span: "wide",
  },
  {
    src: "/portfolio/impermeabilizacao.jpg",
    alt: "Cobertura impermeabilizada com membrana metálica",
    tag: "Impermeabilização",
    title: "Cobertura impermeabilizada",
    span: "square",
  },
  {
    src: "/portfolio/janela-telhado.jpg",
    alt: "Janela de telhado encaixada após reparação de infiltração",
    tag: "Infiltrações",
    title: "Selagem de claraboia",
    span: "square",
  },
  {
    src: "/portfolio/telhado-rua.jpg",
    alt: "Telhado novo em telha portuguesa com vista para a rua",
    tag: "Substituição de telhas",
    title: "Telhado novo em telha portuguesa",
    span: "wide",
  },
  {
    src: "/portfolio/telhado-cidade.jpg",
    alt: "Telhado renovado com vista panorâmica da Póvoa de Varzim",
    tag: "Renovação",
    title: "Renovação com vista panorâmica",
    span: "tall",
  },
];

const SPAN: Record<Item["span"], string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  square: "",
};

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const baWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = observeReveal(sectionRef.current, ".pf-head [data-reveal]");
    const c2 = staggerReveal(gridRef.current, "[data-reveal]", 0.08);
    const c3 = observeReveal(baWrapRef.current, "[data-reveal]");

    const ctx = gsap.context(() => {
      sectionRef.current?.querySelectorAll<HTMLElement>(".pf-img").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement!,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    }, sectionRef);
    refreshTriggers();
    return () => {
      c1();
      c2();
      c3();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="trabalhos"
      ref={sectionRef}
      className="relative section bg-surface-tint"
    >
      <div className="container-tight">
        <div className="pf-head flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl" data-reveal="up">
            <p className="eyebrow">Trabalhos realizados</p>
            <h2 className="mt-5 text-display-lg font-extrabold text-forest-900 text-balance">
              Telhados que ficam novos, e duram
            </h2>
          </div>
          <p data-reveal="up" className="max-w-md text-base leading-relaxed text-ink-500">
            Estes são alguns dos trabalhos realizados pela Telha Verde na Póvoa de Varzim
            e zonas envolventes — da reparação de telhas à impermeabilização completa.
          </p>
        </div>

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {ITEMS.map((it) => (
            <figure
              key={it.title}
              data-reveal="up"
              className={`relative aspect-[4/3] md:aspect-auto ${SPAN[it.span]}`}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-forest-900">
                <div className="absolute inset-0 will-change-transform">
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="pf-img object-cover scale-110 transition-transform duration-700 ease-out-expo group-hover:scale-[1.18]"
                  />
                </div>
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Tag no topo esquerdo */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-terracotta-500/95 px-3 py-1 text-[10px] font-bold uppercase tracking-label-wide text-white shadow-card backdrop-blur-sm">
                  {it.tag}
                </span>

                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                  <h3 className="font-display text-base font-bold leading-tight drop-shadow-md">{it.title}</h3>
                  <span className="inline-flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div ref={baWrapRef} className="mt-20 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div data-reveal="up" className="lg:col-span-5">
            <p className="eyebrow">Antes &amp; Depois</p>
            <h3 className="mt-5 font-display text-3xl font-extrabold text-forest-900 text-balance">
              Da estrutura exposta ao telhado pronto para décadas.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Quando o telhado já não dá mais — vigas podres, telhas partidas, infiltrações —
              entramos, removemos a cobertura antiga e reconstruímos com segurança e acabamento
              cuidado.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-7"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir orçamento
              <ArrowRightIcon />
            </a>
          </div>
          <div data-reveal="up" className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card lg:col-span-7">
            <BeforeAfter
              beforeSrc="/portfolio/antes-estrutura.jpg"
              afterSrc="/portfolio/telhado-final.jpg"
              beforeAlt="Estrutura de telhado exposta antes da intervenção"
              afterAlt="Telhado renovado, finalizado em telha nova"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
