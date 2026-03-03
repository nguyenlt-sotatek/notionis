import { Mail } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-primary-foreground">N</span>
        </div>
        <span className="text-sm font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          Notionis
        </span>
      </div>
      <a
        href="mailto:hello@notionis.work"
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <Mail className="h-4 w-4" />
        <span className="hidden sm:inline">hello@notionis.work</span>
      </a>
    </header>
  )
}
