type InteriorPageHeroProps = { title: string };

export function InteriorPageHero({ title }: InteriorPageHeroProps) {
  return (
    <section className="wave-section relative isolate overflow-hidden bg-brand-blue py-16 text-center sm:py-20">
      <div className="wave wave-top" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">{title}</h1>
      </div>
    </section>
  );
}
