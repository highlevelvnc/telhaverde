import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

type LogoProps = {
  /** Variant: "dark" para fundos claros (default), "light" para fundos escuros. */
  variant?: "dark" | "light";
  /** Mostrar o wordmark "Telhados Telha Verde" ao lado do ícone. */
  showWordmark?: boolean;
  /** Tamanho do ícone do logo. */
  size?: "sm" | "md" | "lg";
  /**
   * Mostrar um cartão branco por trás do logo (útil para fundos escuros, já
   * que o texto do logo é verde escuro e desaparece em fundos forest).
   * Default: true em variant="light", false em variant="dark".
   */
  withBackground?: boolean;
  href?: string;
  className?: string;
};

const SIZE_PX = { sm: 36, md: 48, lg: 64 } as const;

export function Logo({
  variant = "dark",
  showWordmark = true,
  size = "md",
  withBackground,
  href = "#inicio",
  className = "",
}: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-forest-900";
  const accentColor = variant === "light" ? "text-terracotta-300" : "text-terracotta-500";
  const subColor = variant === "light" ? "text-white/70" : "text-ink-500";
  const px = SIZE_PX[size];
  const showCard = withBackground ?? variant === "light";

  return (
    <Link
      href={href}
      aria-label={`${COMPANY.name} — ${COMPANY.tagline}`}
      className={`inline-flex items-center gap-3 group ${className}`}
    >
      <span
        className={`relative inline-flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
          showCard ? "rounded-lg bg-white p-1.5 shadow-soft ring-1 ring-white/10" : ""
        }`}
        style={{ width: showCard ? px + 12 : px, height: showCard ? px + 12 : px }}
      >
        <Image
          src="/logo.png"
          alt=""
          width={px}
          height={px}
          style={{ width: "auto", height: "auto" }}
          className="max-h-full max-w-full object-contain"
          priority
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-[11px] font-semibold uppercase tracking-label-wide ${subColor}`}>
            Telhados
          </span>
          <span className={`mt-1 font-display text-base font-extrabold tracking-tight ${wordColor}`}>
            Telha <span className={accentColor}>Verde</span>
          </span>
        </span>
      )}
    </Link>
  );
}
