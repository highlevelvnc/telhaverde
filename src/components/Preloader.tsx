"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Preloader temático:
 * - Cobre o ecrã enquanto a página inicial monta.
 * - SVG anima uma casa a "ser coberta" peça a peça: paredes, telhado (linhas
 *   esquerda + direita), telhas a aparecer em fileiras e cumeeira a selar.
 * - Logo + caption Telha Verde aparecem em sequência.
 * - Fade-out automático a ~1500ms ou no `window.load` (o que ocorrer primeiro).
 * - Se `prefers-reduced-motion`, esconde-se imediatamente sem animação.
 */
export function Preloader() {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const minDelay = reduced ? 0 : 1500;
    const hardStop = reduced ? 50 : 2600;

    const onLoad = () => {
      window.setTimeout(() => setDone(true), Math.max(0, minDelay - 200));
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    const fallback = window.setTimeout(() => setDone(true), hardStop);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(fallback);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    document.body.style.overflow = "";
    const t = window.setTimeout(() => setRemoved(true), 700);
    return () => window.clearTimeout(t);
  }, [done]);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-950 transition-opacity duration-700 ease-out-expo ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* fundo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-forest opacity-20" />
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-terracotta-500/15 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-forest-600/25 blur-[140px]" />

      {/* logo — cartão branco pequeno para o texto verde escuro do logo ser visível em fundo escuro */}
      <div className="relative mb-6 flex h-24 w-32 items-center justify-center rounded-xl bg-white p-3 shadow-card-hover pl-logo">
        <Image src="/logo.png" alt="Telhados Telha Verde" width={128} height={96} style={{ width: "auto", height: "auto" }} className="max-h-full max-w-full object-contain" priority />
      </div>

      {/* SVG do telhado a montar */}
      <svg
        viewBox="0 0 240 140"
        className="h-28 w-48 sm:h-32 sm:w-56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* paredes — aparecem primeiro */}
        <g className="pl-walls">
          <rect x="44" y="84" width="152" height="48" rx="2" stroke="#3eab64" strokeWidth="2" fill="rgba(62,171,100,0.08)" />
          {/* porta */}
          <rect x="108" y="100" width="24" height="32" rx="1" stroke="#3eab64" strokeWidth="1.4" />
          {/* janelas */}
          <rect x="60" y="98" width="20" height="20" rx="1" stroke="#3eab64" strokeWidth="1.4" />
          <rect x="160" y="98" width="20" height="20" rx="1" stroke="#3eab64" strokeWidth="1.4" />
        </g>

        {/* triângulo do telhado — vigas */}
        <path
          d="M30 84 L120 28 L210 84"
          className="pl-roof-line"
          stroke="#d56a35"
          strokeWidth="2.4"
        />

        {/* fileiras de telhas */}
        <g stroke="#d56a35" strokeWidth="1.6" className="pl-tiles">
          {/* fileira 1 (mais alta) */}
          <line className="pl-tile pl-tile-1" x1="92" y1="64" x2="148" y2="64" />
          {/* fileira 2 */}
          <line className="pl-tile pl-tile-2" x1="74" y1="74" x2="166" y2="74" />
          {/* fileira 3 (mais baixa) */}
          <line className="pl-tile pl-tile-3" x1="56" y1="84" x2="184" y2="84" />
        </g>

        {/* cumeeira (selo final) */}
        <circle cx="120" cy="28" r="3" fill="#d56a35" className="pl-ridge" />

        {/* chaminé */}
        <rect x="160" y="38" width="10" height="20" rx="1" stroke="#d56a35" strokeWidth="1.6" className="pl-chimney" />
      </svg>

      {/* texto */}
      <div className="mt-8 flex flex-col items-center">
        <p className="pl-wordmark font-display text-2xl font-extrabold text-white">
          Telhados <span className="text-terracotta-300">Telha Verde</span>
        </p>
        <p className="pl-caption mt-2 text-xs font-semibold uppercase tracking-label-wide text-white/55">
          A preparar o seu telhado<span className="pl-dots" aria-hidden>…</span>
        </p>
      </div>

      <style jsx>{`
        /* Paredes — fade-up rápido */
        :global(.pl-walls) {
          transform-box: fill-box;
          transform-origin: center bottom;
          opacity: 0;
          animation: pl-fade-up 0.5s ease-out 0.05s forwards;
        }

        /* Vigas do telhado — draw stroke */
        :global(.pl-roof-line) {
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
          animation: pl-draw 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }

        /* Telhas — aparecem em sequência da mais baixa para a mais alta */
        :global(.pl-tile) {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          opacity: 0;
        }
        :global(.pl-tile-3) {
          animation: pl-draw 0.45s ease-out 0.95s forwards;
        }
        :global(.pl-tile-2) {
          animation: pl-draw 0.4s ease-out 1.15s forwards;
        }
        :global(.pl-tile-1) {
          animation: pl-draw 0.35s ease-out 1.3s forwards;
        }

        /* Cumeeira — pop */
        :global(.pl-ridge) {
          transform-origin: 120px 28px;
          transform: scale(0);
          animation: pl-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.45s forwards;
        }

        /* Chaminé — fade-up */
        :global(.pl-chimney) {
          transform-box: fill-box;
          transform-origin: center bottom;
          transform: translateY(8px);
          opacity: 0;
          animation: pl-fade-up 0.4s ease-out 1.15s forwards;
        }

        /* Logo container — fade-up muito ligeiro */
        :global(.pl-logo) {
          opacity: 0;
          transform: translateY(8px);
          animation: pl-fade-up 0.6s ease-out 0s forwards;
        }

        /* Texto */
        :global(.pl-wordmark) {
          opacity: 0;
          transform: translateY(8px);
          animation: pl-fade-up 0.6s ease-out 0.3s forwards;
        }
        :global(.pl-caption) {
          opacity: 0;
          animation: pl-fade-in 0.6s ease-out 0.5s forwards;
        }

        /* Reticências animadas */
        :global(.pl-dots) {
          display: inline-block;
          width: 1ch;
          overflow: hidden;
          vertical-align: bottom;
          animation: pl-dots 1.6s steps(4, end) infinite;
        }

        @keyframes pl-fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-fade-in {
          to { opacity: 1; }
        }
        @keyframes pl-draw {
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes pl-pop {
          to { transform: scale(1); }
        }
        @keyframes pl-dots {
          0%   { width: 0; }
          33%  { width: 1ch; }
          66%  { width: 2ch; }
          100% { width: 3ch; }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.pl-walls),
          :global(.pl-roof-line),
          :global(.pl-tile),
          :global(.pl-ridge),
          :global(.pl-chimney),
          :global(.pl-logo),
          :global(.pl-wordmark),
          :global(.pl-caption) {
            opacity: 1;
            transform: none;
            stroke-dashoffset: 0;
            animation: none;
          }
          :global(.pl-dots) { animation: none; width: 3ch; }
        }
      `}</style>
    </div>
  );
}
