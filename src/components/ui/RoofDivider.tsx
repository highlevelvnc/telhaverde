type RoofDividerProps = {
  /** Cor de fundo da secção que vem A SEGUIR (a parte por baixo do recorte). */
  fill?: string;
  /** Cor de fundo da secção que vem ANTES (mantém-se no topo). Não é desenhada;
   *  passa-se só para referência semântica. */
  className?: string;
  flip?: boolean;
};

/**
 * Divisor decorativo com silhueta de telhado em zig-zag.
 * Usado entre secções para reforçar o nicho. Subtil — apenas uma faixa
 * com triângulos pequenos no topo de uma cor sólida (`fill`).
 */
export function RoofDivider({ fill = "#ffffff", className = "", flip = false }: RoofDividerProps) {
  return (
    <div className={`relative -mb-px overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className={`block h-6 w-full sm:h-8 ${flip ? "rotate-180" : ""}`}
      >
        {/* zig-zag: telhados em sucessão */}
        <path
          d="M0 40 L0 24 L60 4 L120 24 L180 4 L240 24 L300 4 L360 24 L420 4 L480 24 L540 4 L600 24 L660 4 L720 24 L780 4 L840 24 L900 4 L960 24 L1020 4 L1080 24 L1140 4 L1200 24 L1200 40 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
