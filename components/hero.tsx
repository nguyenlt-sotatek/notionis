export function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pb-20 pt-24 text-center md:px-12 md:pt-32 lg:px-20 lg:pt-40">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Notionis System Limited
      </p>
      <h1
        className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Building intelligent tools for the modern workplace
      </h1>
      <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        We create AI-powered products that amplify human productivity — from
        multimodal note-taking to real-time voice translation.
      </p>
    </section>
  )
}
