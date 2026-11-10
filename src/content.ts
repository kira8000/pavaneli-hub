// Todo o conteúdo do site. Fonte: docs/CONTEXT.md. Editar aqui, nunca nos componentes.

export type Photo = { src: string; alt: string } | null; // null = placeholder "foto em breve"
export type LinkItem = { label: string; handle: string; href: string };
export type Stat = { value: string; label: string };

export type Content = {
  site: { title: string; description: string };
  pavaneli: {
    name: string;
    aka: string;
    tagline: string;
    bio: string;
    releases: string[];
    producer: string;
    photo: Photo;
  };
  batalha: {
    name: string;
    bio: string;
    nextEdition: { iso: string; label: string; note: string };
    schedule: string;
    address: { line: string; venue: string; mapsHref: string };
    stats: Stat[];
    partners: string[];
    photo: Photo;
  };
  repco: {
    name: string;
    members: string;
    bio: string;
    releases: string[];
    photo: Photo;
  };
  links: LinkItem[];
  contact: { email: string } | null; // null = placeholder até definir
};

const address = "Praça José Antonio Chiarella, 84A — Vila Matilde, São Paulo";

export const content: Content = {
  site: {
    title: "Pavaneli (Pava MC) — rap da Zona Leste de SP",
    description:
      "Pavaneli, MC independente da Zona Leste de SP. Rap nacional, boom bap, Batalha da SAN e REPCO.",
  },
  pavaneli: {
    name: "Pavaneli",
    aka: "Pava MC",
    tagline: "MC independente da Zona Leste de SP. Rap nacional e boom bap.",
    bio: "MC independente da Zona Leste de SP, rap nacional e boom bap. Freestyle desde 2024, violão desde 2012. Cresceu em lugares onde não esperavam ver ele e aprendeu a ler o jogo dos dois lados: de quem manda e de quem é apagado. É isso que vira letra. Lançamentos com produção de ProdScauri: Sutileza, Dose Dupla, Lado B e Suco de Metrópole. Integrante da REPCO e um dos organizadores da Batalha da SAN.",
    releases: ["Sutileza", "Dose Dupla", "Lado B", "Suco de Metrópole"],
    producer: "ProdScauri",
    photo: null,
  },
  batalha: {
    name: "Batalha da SAN",
    bio: "Quinzenal, às quintas, na Vila Matilde, Zona Leste de SP, desde outubro de 2025. Mais de 20 edições, de 8 a 16 MCs e cerca de 30 pessoas por noite, além de especiais com Biblioteca Ricardo Ramos, Sarau da Progresso, Game Grooves e Gaviões Cangaíba. Roda aberta: MC, poeta de rua, canto, dança, malabares e pirofagia dividem o mesmo chão. Ali se treina debate e senso crítico, da plateia ao mic.",
    nextEdition: { iso: "2026-11-19", label: "19/11", note: "quinta-feira · 12/11 não tem" },
    schedule: "Quinzenal, às quintas",
    address: {
      line: address,
      venue: "Casa San Pancho",
      mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
    },
    stats: [
      { value: "20+", label: "edições na grade" },
      { value: "8–16", label: "MCs por noite" },
      { value: "~30", label: "pessoas por noite" },
      { value: "4", label: "especiais com parceiros" },
    ],
    partners: ["Biblioteca Ricardo Ramos", "Sarau da Progresso", "Game Grooves", "Gaviões Cangaíba"],
    photo: null,
  },
  repco: {
    name: "REPCO",
    members: "Alma, França e Pavaneli nas vozes, Scauri nos beats.",
    bio: "Três jeitos de rimar que se completam, contando o que a quebrada vê. Tudo feito em home studio, da guia ao mix, do FL ao Ableton.",
    releases: ["A Pura", "Repco", "Ice do Amigo", "Eu Vou Subir", "OLHO BAIXO"],
    photo: null,
  },
  links: [
    { label: "Spotify", handle: "Pava MC", href: "https://open.spotify.com/artist/3REZdbYDH3c5SF8BXJvD3o" },
    { label: "Instagram", handle: "@pavaneli__", href: "https://www.instagram.com/pavaneli__/" },
    { label: "Batalha da SAN", handle: "@batalhadasan", href: "https://www.instagram.com/batalhadasan/" },
  ],
  contact: null,
};
