import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

type LogoProps = {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  href?: string;
  className?: string;
};

export function Logo({ variant = "dark", showWordmark = true, href = "#inicio", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-forest-900";
  const accentColor = variant === "light" ? "text-terracotta-300" : "text-terracotta-500";
  const subColor = variant === "light" ? "text-white/70" : "text-ink-500";

  return (
    <Link
      href={href}
      aria-label={`${COMPANY.name} — ${COMPANY.tagline}`}
      className={`inline-flex items-center gap-3 group ${className}`}
    >
      <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-soft ring-1 ring-line transition-transform duration-300 group-hover:scale-105">
        <Image src="/logo.png" alt="" width={40} height={40} style={{ width: "auto", height: "auto" }} className="max-h-10 max-w-[40px] object-contain" priority />
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
