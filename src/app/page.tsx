import Image from "next/image";
import { content, type Photo } from "@/content";

const { pavaneli, batalha, repco, links, contact } = content;

function PhotoSlot({ photo, label, className = "" }: { photo: Photo; label: string; className?: string }) {
  if (photo) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover grayscale contrast-125" />
      </div>
    );
  }
  return (
    <div className={`tape flex items-center justify-center p-1 ${className}`} role="img" aria-label={`Foto em breve: ${label}`}>
      <span className="bg-ink px-3 py-1 font-display text-lg uppercase tracking-wide text-tape">Foto em breve · {label}</span>
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-display text-sm uppercase tracking-[0.3em] text-tape">{children}</p>;
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="border-2 border-paper px-2 py-0.5 font-display text-base uppercase tracking-wide">
          {item}
        </li>
      ))}
    </ul>
  );
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-tape focus:px-3 focus:py-2 focus:text-ink">
        Pular para o conteúdo
      </a>

      <header className="mx-auto grid max-w-6xl gap-6 px-4 pb-12 pt-10 md:grid-cols-[1.2fr_1fr] md:items-end md:pt-20">
        <div>
          <Kicker>Zona Leste · SP · rap nacional</Kicker>
          <h1 className="mt-3 font-display text-[22vw] uppercase leading-[0.85] md:text-[11rem]">{pavaneli.name}</h1>
          <p className="mt-3 text-lg text-dim">
            aka <strong className="text-paper">{pavaneli.aka}</strong> nas plataformas
          </p>
          <p className="mt-4 max-w-md text-xl font-semibold">{pavaneli.tagline}</p>
          <nav aria-label="Seções" className="mt-6 flex flex-wrap gap-3 font-display uppercase tracking-wide">
            {[
              ["#batalha", "Batalha da SAN"],
              ["#repco", "REPCO"],
              ["#links", "Ouvir / seguir"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="bg-paper px-3 py-1 text-ink hover:bg-tape">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <PhotoSlot photo={pavaneli.photo} label="Pavaneli" className="aspect-[4/5] -rotate-1" />
      </header>

      <main id="conteudo">
        <section aria-labelledby="sobre" className="border-t-4 border-paper">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 id="sobre" className="font-display text-5xl uppercase md:text-7xl">Quem rima</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed md:text-xl">{pavaneli.bio}</p>
            <h3 className="mt-8 font-display text-xl uppercase text-dim">Lançamentos · prod. {pavaneli.producer}</h3>
            <div className="mt-3">
              <Tags items={pavaneli.releases} />
            </div>
          </div>
        </section>

        <section id="batalha" aria-labelledby="batalha-titulo" className="bg-paper text-ink">
          <div className="tape h-4" aria-hidden />
          <div className="mx-auto max-w-6xl px-4 py-12">
            <p className="font-display text-sm uppercase tracking-[0.3em]">{batalha.schedule} · Vila Matilde</p>
            <h2 id="batalha-titulo" className="mt-2 font-display text-6xl uppercase leading-none md:text-8xl">{batalha.name}</h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="-rotate-1 bg-ink p-6 text-paper">
                <p className="font-display text-sm uppercase tracking-[0.3em] text-tape">Próxima edição</p>
                <p className="font-display text-8xl leading-none md:text-9xl">
                  <time dateTime={batalha.nextEdition.iso}>{batalha.nextEdition.label}</time>
                </p>
                <p className="mt-1 text-lg">{batalha.nextEdition.note}</p>
                <address className="mt-4 not-italic">
                  <span className="block font-semibold">{batalha.address.venue}</span>
                  {batalha.address.line}
                </address>
                <a href={batalha.address.mapsHref} {...external} className="mt-4 inline-block bg-tape px-3 py-1 font-display uppercase tracking-wide text-ink hover:bg-paper">
                  Abrir no mapa
                </a>
              </div>
              <PhotoSlot photo={batalha.photo} label="Batalha da SAN" className="aspect-video md:aspect-auto md:min-h-64" />
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px border-4 border-ink bg-ink md:grid-cols-4">
              {batalha.stats.map((s) => (
                <div key={s.label} className="bg-paper p-4">
                  <dt className="text-sm font-semibold uppercase">{s.label}</dt>
                  <dd className="font-display text-5xl">{s.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed md:text-xl">{batalha.bio}</p>
          </div>
          <div className="tape h-4" aria-hidden />
        </section>

        <section id="repco" aria-labelledby="repco-titulo">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <PhotoSlot photo={repco.photo} label="REPCO" className="aspect-square rotate-1" />
            <div>
              <Kicker>Grupo</Kicker>
              <h2 id="repco-titulo" className="mt-2 font-display text-7xl uppercase leading-none md:text-9xl">{repco.name}</h2>
              <p className="mt-4 text-xl font-semibold">{repco.members}</p>
              <p className="mt-3 text-lg leading-relaxed">{repco.bio}</p>
              <h3 className="mt-6 font-display text-xl uppercase text-dim">Lançamentos</h3>
              <div className="mt-3">
                <Tags items={repco.releases} />
              </div>
            </div>
          </div>
        </section>

        <section id="links" aria-labelledby="links-titulo" className="border-t-4 border-paper">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 id="links-titulo" className="font-display text-5xl uppercase md:text-7xl">Ouvir / seguir</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} {...external} className="flex flex-wrap items-baseline justify-between gap-x-3 border-4 border-paper p-4 hover:bg-tape hover:text-ink">
                    <span className="font-display text-3xl uppercase">{l.label}</span>
                    <span className="font-semibold">
                      {l.handle} <span aria-hidden>↗</span>
                      <span className="sr-only"> (abre em nova aba)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl uppercase">Contato</h2>
            {contact ? (
              <a href={`mailto:${contact.email}`} className="mt-2 inline-block text-xl font-semibold underline decoration-tape decoration-4 underline-offset-4">
                {contact.email}
              </a>
            ) : (
              <p className="mt-2 text-lg text-dim">Contato direto em breve. Até lá, chama no Instagram.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-paper px-4 py-6 text-center text-sm text-dim">
        {pavaneli.name} ({pavaneli.aka}) · Zona Leste de SP
      </footer>
    </>
  );
}
