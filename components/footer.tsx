import { MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
              <span className="text-[10px] font-bold text-primary-foreground">N</span>
            </div>
            <span
              className="text-sm font-semibold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Notionis System Limited
            </span>
          </div>
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
            <span>
              1804 Beverly House, 93-107 Lockhart Street, Wanchai, Hong Kong
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Mail className="h-3 w-3 shrink-0" />
            <a
              href="mailto:hello@notionis.work"
              className="transition-colors hover:text-foreground"
            >
              hello@notionis.work
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()} Notionis System Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
