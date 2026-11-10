@AGENTS.md

# Pavaneli Hub — instruções para sessões do Claude

Leia primeiro **[docs/CONTEXT.md](docs/CONTEXT.md)**: é a fonte única de verdade do projeto (quem é o usuário,
decisões, textos aprovados, links, dados da batalha, editais, roadmap, débitos, estado do código).
Nunca apague nem reescreva informação de lá: acrescente, e marque o que ficou desatualizado com data.

## Quem é o usuário
Guilherme, artista **Pavaneli** (nas plataformas ainda "Pava Mc") e dev full stack (React/Next/TypeScript).
Detalhes de carreira, coletivo e metas em `docs/CONTEXT.md` → "Sobre o usuário".

## Como trabalhar aqui
- Respostas em pt-BR, curtas. O usuário costuma ter pouco token: seja econômico, sem subagentes.
- Conteúdo do site mora só em `src/content.ts` (tipado). Componentes não têm texto fixo.
  Info nova = edição de dado em `content.ts` + registro em `docs/CONTEXT.md`.
- Texto público precisa estar em "Textos aprovados" do CONTEXT ou ser aprovado pelo usuário.
- Nunca usar publicamente "SAN = Som Alternativo Negro". Campeões e o nome "Blecaute" ficam fora do site
  até o usuário liberar (decisão de 09/11/2026).
- Commit, push e deploy só com confirmação explícita do usuário.

## Comandos
```bash
npm install
npm run dev     # http://localhost:3000 (preview: .claude/launch.json → "dev")
npm run lint
npm run build   # export estático em out/
```

## Armadilhas conhecidas
- Next 16: leia `node_modules/next/dist/docs/` antes de usar API nova (ver AGENTS.md).
- `output: "export"` não aceita `cacheComponents`/`partialPrefetching` (erro "PPR cannot be enabled in
  export mode"). Imagens usam `images.unoptimized`.
- Título com `uppercase` no CSS: `innerText` volta em maiúsculas (cuidado ao validar texto por JS).
