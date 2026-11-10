# Pavaneli Hub

Página única (Next.js estático + Tailwind) de Pavaneli, Batalha da SAN e REPCO.
Decisões e textos aprovados: [docs/CONTEXT.md](docs/CONTEXT.md).

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera o site estático em out/
npm run lint
```

## Editar conteúdo

Tudo que aparece no site está em [`src/content.ts`](src/content.ts). Os componentes só leem dali.
O TypeScript acusa no `npm run build` se faltar campo.

- **Próxima batalha**: `batalha.nextEdition` — `iso` (AAAA-MM-DD), `label` (como aparece, ex. `19/11`) e `note`.
  Não atualiza sozinha: troque a cada edição.
- **Textos**: `pavaneli.bio`, `batalha.bio`, `repco.bio`.
- **Lançamentos / parceiros**: são listas de texto, é só adicionar ou remover itens.
- **Números da batalha**: `batalha.stats` (`value` grande + `label`).
- **Links**: `links` (label, @ e URL).
- **Contato**: `contact` está `null` (mostra "chama no Instagram"). Para ativar: `contact: { email: "..." }`.

### Fotos

Cada seção tem `photo: null`, que mostra a fita amarela "foto em breve". Para trocar:

1. Coloque o arquivo em `public/fotos/` (ex. `public/fotos/pavaneli.jpg`).
2. No `content.ts`: `photo: { src: "/fotos/pavaneli.jpg", alt: "Pavaneli rimando na Batalha da SAN" }`.

A foto aparece em preto e branco e cortada para caber no espaço.
