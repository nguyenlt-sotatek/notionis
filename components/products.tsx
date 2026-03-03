import { ArrowUpRight, Pen, Languages } from "lucide-react"

const products = [
  {
    name: "NoteX AI",
    tagline: "Where AI meets your notes",
    description:
      "The best multimodal AI note taker. Capture ideas with text, voice, images, and let AI organize everything intelligently.",
    href: "https://notexapp.com",
    icon: Pen,
    features: ["Multimodal capture", "AI-powered organization", "Smart summaries"],
  },
  {
    name: "Saydi AI",
    tagline: "Break every language barrier",
    description:
      "Real-time AI voice translation for global events and meetings. Communicate seamlessly across languages, instantly.",
    href: "https://saydi.ai",
    icon: Languages,
    features: ["Real-time translation", "Global events", "Multi-language support"],
  },
]

export function Products() {
  return (
    <section className="px-6 pb-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Products
        </p>
        <h2
          className="mb-12 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What we are building
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-secondary"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <product.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <h3
                  className="mb-1 text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-accent">
                  {product.tagline}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
