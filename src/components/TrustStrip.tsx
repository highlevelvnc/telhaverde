"use client";

import { useEffect, useRef } from "react";
import { staggerReveal } from "@/lib/scrollReveal";
import { CheckIcon } from "@/components/ui/Icons";

const ITEMS = [
  "Diagnóstico no local",
  "Orçamento sem compromisso",
  "Resposta em 24 horas",
  "Trabalho com garantia",
];

export function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => staggerReveal(ref.current, "[data-reveal]", 0.06), []);

  return (
    <section
      aria-label="Compromissos da Telhados Telha Verde"
      ref={ref}
      className="relative -mt-px border-y border-line bg-white"
    >
      <div className="container-tight">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 lg:grid-cols-4 lg:gap-x-10 lg:py-7">
          {ITEMS.map((it) => (
            <li
              key={it}
              data-reveal="up"
              className="flex items-center gap-3 text-sm font-medium text-ink-700"
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-900 text-white ring-4 ring-forest-900/5">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span className="font-display text-[15px] font-semibold leading-tight text-forest-900">
                {it}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
