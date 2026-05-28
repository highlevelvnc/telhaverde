"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo ${
        scrolled
          ? "border-b border-line/70 bg-white/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* Top bar com telefone — desktop */}
      <div className={`hidden border-b border-white/10 bg-forest-900 text-white transition-all duration-300 lg:block ${scrolled ? "h-0 -translate-y-full opacity-0" : "h-9 translate-y-0 opacity-100"}`}>
        <div className="container-tight flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5 text-white/85">
            <span className="inline-flex items-center gap-2">
              <PhoneIcon className="h-3.5 w-3.5 text-terracotta-300" />
              {COMPANY.phone}
            </span>
            <span className="inline-flex items-center gap-2 text-white/70">
              <span className="h-1 w-1 rounded-full bg-terracotta-400" />
              {COMPANY.region}
            </span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white hover:text-terracotta-200"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Orçamento pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="container-tight flex h-20 items-center justify-between gap-4">
        <Logo size="lg" />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-forest-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-whatsapp lg:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir orçamento
          </a>

          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-forest-900 transition-colors hover:bg-surface-muted lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-0 top-20 bg-forest-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-20 origin-top transition-all duration-300 ease-out-expo ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="container-tight pb-6">
            <nav className="rounded-2xl border border-line bg-white p-3 shadow-card-hover">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-md px-4 py-3.5 text-base font-medium text-forest-900 transition-colors hover:bg-surface-muted"
                    >
                      {link.label}
                      <ArrowRightIcon className="h-4 w-4 text-terracotta-500" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY.phoneDigits}`}
                  onClick={() => setOpen(false)}
                  className="btn-secondary w-full"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Ligar
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-whatsapp w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
