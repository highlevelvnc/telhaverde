import { Logo } from "@/components/ui/Logo";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

const SERVICE_LINKS = [
  "Reparação de Telhados",
  "Limpeza de Telhados",
  "Impermeabilização",
  "Substituição de Telhas",
  "Reparação de Infiltrações",
  "Manutenção de Coberturas",
];

const REGIONS = [
  "Póvoa de Varzim",
  "Vila do Conde",
  "Esposende",
  "Vila Nova de Famalicão",
  "Trofa",
  "Maia",
  "Matosinhos",
  "Porto",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-950 text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="container-tight grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
            Especialistas em reparação, limpeza, impermeabilização e manutenção de
            telhados na Póvoa de Varzim. Trabalho rigoroso, acabamento duradouro.
          </p>

          <ul className="mt-7 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 text-terracotta-300" />
              <a href={`tel:${COMPANY.phoneDigits}`} className="hover:text-white">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 text-terracotta-300" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 text-terracotta-300" />
              <span>{COMPANY.region}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-label-wide text-white/90">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-label-wide text-white/90">
            Serviços
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#servicos" className="transition-colors hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-label-wide text-white/90">
            Zona de atendimento
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <li
                key={r}
                className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/75"
              >
                {r}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY.fullName}. Todos os direitos reservados.
          </p>
          <p>Telhados que protegem. Trabalho que dura.</p>
        </div>
      </div>
    </footer>
  );
}
