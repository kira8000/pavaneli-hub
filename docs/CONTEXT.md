# Contexto do Pavaneli Hub

Fonte: sessão de estratégia de 09/11/2026 (Claude Code). Fonte única de verdade do hub (antes e depois do código).
Regra: acrescentar, nunca apagar. Informação que mudar ganha data e o valor antigo fica registrado.

## Sobre o usuário
- **Guilherme**, nome artístico **Pavaneli** (28 anos). Nas plataformas ainda aparece como "Pava Mc"
  (troca para Pavaneli planejada para dez/2026).
- MC independente da Zona Leste de SP (rap nacional, boom bap). Integrante da REPCO e um dos organizadores
  da Batalha da SAN (coletivo Blecaute, com França e Thainá).
- Dev full stack: React, Next.js, TypeScript. Portfólio de dev separado: pavaneli-site.vercel.app.
- Outros projetos dele: **Versus Web** (POC de registro de batalhas, prioridade logo após o reset de tokens)
  e **Versus Mobile** (backend pronto, não publicado). Ver seção "Versus".
- Metas de carreira agora: audiência musical e edital **VAI I 2027**.
- Preferências de trabalho: respostas em pt-BR, curtas; costuma ter pouco token, então economia importa;
  commit/push/deploy só com confirmação dele.

## Objetivo
Hub único com Pavaneli no centro + seção da Batalha da SAN + REPCO. Foco de carreira agora:
**audiência musical** e **editais** (meta: VAI I 2027). O site também serve de portfólio para edital.

## Decisões fechadas
- Repositório próprio, separado do portfólio de dev (pavaneli-site.vercel.app).
- Stack: Next estático + Tailwind, deploy Vercel. Conteúdo em um arquivo de dados (content.ts/JSON):
  info nova vira edição de dado, não de código.
- v0 = página única: textos, links, próxima edição da batalha, contato. Sem banco, sem Versus, sem domínio.
- Estética: underground, de rua, autêntica. Fundo escuro, tipografia pesada, foto real. Nada genérico/cara de IA.
- Domínio futuro: **pavaneli.com.br** (livre em 09/11/2026, compra adiada). Rotas futuras: /batalha, /repco.
- Nome artístico a unificar: **Pavaneli** (plataformas hoje: "Pava Mc"; troca planejada para dezembro
  via DistroKid + SoundOn). No site, citar "Pava MC" para busca.
- Coletivo organizador (nome protótipo): **Blecaute** — Pavaneli (28), França (30), Thainá (26, proponente do VAI I).
  Não usar "SAN = Som Alternativo Negro" publicamente (nome ligado à casa San Pancho).
- REPCO consentiu aparecer. MCs aceitam ranking público quando houver base.

## Links
- Spotify (Pava Mc): https://open.spotify.com/artist/3REZdbYDH3c5SF8BXJvD3o
- Instagram pessoal: https://www.instagram.com/pavaneli__/ (826 seguidores em 11/2026)
- Instagram batalha: https://www.instagram.com/batalhadasan/ (577 seguidores em 11/2026)
- Fotos: pendentes (usuário enviará).

## Textos aprovados
**Pavaneli** — MC independente da Zona Leste de SP, rap nacional e boom bap. Freestyle desde 2024, violão desde 2012.
Cresceu em lugares onde não esperavam ver ele e aprendeu a ler o jogo dos dois lados: de quem manda e de quem é
apagado. É isso que vira letra. Lançamentos com produção de ProdScauri: Sutileza, Dose Dupla, Lado B e Suco de
Metrópole. Integrante da REPCO e um dos organizadores da Batalha da SAN.

**Batalha da SAN** — Quinzenal, às quintas, na Vila Matilde, Zona Leste de SP, desde outubro de 2025. Mais de 20
edições, de 8 a 16 MCs e cerca de 30 pessoas por noite, além de especiais com Biblioteca Ricardo Ramos, Sarau da
Progresso, Game Grooves e Gaviões Cangaíba. Roda aberta: MC, poeta de rua, canto, dança, malabares e pirofagia
dividem o mesmo chão. Ali se treina debate e senso crítico, da plateia ao mic.

**REPCO** — Alma, França e Pavaneli nas vozes, Scauri nos beats. Três jeitos de rimar que se completam, contando o
que a quebrada vê. Tudo feito em home studio, da guia ao mix, do FL ao Ableton. Lançamentos: A Pura, Repco, Ice do
Amigo, Eu Vou Subir e OLHO BAIXO.

**Blecaute (edital)** — Coletivo da Zona Leste formado por Pavaneli, França e Thainá, responsável pela Batalha da
SAN. Organiza, registra e filma a cena de rima da Vila Matilde.

## Batalha da SAN — dados
- Local: Praça José Antonio Chiarella, 84A — Vila Matilde, SP (casa San Pancho).
- Quinzenal às quintas. Próxima: **19/11/2026** (12/11 não tem). Extras com parceiros não cancelam a grade.
- 24 eventos de 09/10/2025 a 05/11/2026: 20 na grade (5 em 2025, 15 em 2026) + 4 especiais.
- Pausa dez/2025–mar/2026: mudança societária da casa + festas; compensada com especial na Biblioteca Ricardo Ramos (21/02/2026).
- Planilha bruta: C:\Users\guilh\Desktop\Edições batalha da SAN - Página1.csv
  (colunas: edição, data, campeão, post anúncio, post resultado, obs). Faltam campeões em 11 edições (débito).
- Campeões conhecidos: Della, All (3x), Renovo (3x), Jake, Alighieri, Formiga, CL da rima, Brenner, Brenner e Jovem A (dupla, 2x).

## Versus (fonte futura de ranking/histórico)
- Versus Web: POC em uso; só a última edição registrada. Melhorias mapeadas pelo usuário (ele aplica após reset de tokens).
- Versus Mobile: não publicado; backend pronto. 2027: área logada da organização (3 usuários), MC por nome com
  validação de duplicidade, depois cadastro de MC.
- Plano: importar a planilha como edições; o hub lê dados do Versus só depois do v0.

## Editais (a verificar no PDF oficial)
- VAI I (SP capital): grupo de pessoas físicas, mín. 3 integrantes, prioridade 18–29 anos; inscrição ~mai/jun 2027.
  Proponente: Thainá. Orçar editor de vídeo. Território (Vila Matilde) a confirmar.
- VAI II: 2 anos de atuação (out/2027). Fomento à Periferia: 3 anos e orçamento ≥ R$158 mil (futuro).

## Roadmap
1. v0 da página única (agora). → 09/11/2026: pronto localmente; falta commit e deploy.
2. Versus Web pronto para 19/11; rodar em todas as edições até dez.
3. Dez: troca Pava Mc → Pavaneli; decidir artista "REPCO" nas plataformas.
4. Jan–abr/2027: login Blecaute no Versus; site v1 (/batalha com dados, /repco, domínio); preparar VAI I.

## Débitos
Planilha completa · fotos · compra do domínio · organizar vídeo bruto · busca "Pavaneli" no Apple Music · chamado SoundOn (A Pura).
Hub (09/11/2026): e-mail de contato · primeiro commit · deploy Vercel · liberar (ou não) campeões e "Blecaute" no site.

## Estado do código (atualizado 09/11/2026)
- Pasta: `C:\Users\guilh\Desktop\Projects\pavaneli-hub`. Git iniciado, **sem commit**, sem remoto, sem deploy.
- Stack: Next 16.4.6 (App Router, `output: "export"`), React 19, Tailwind 4, TypeScript. Sem banco, sem analytics.
- v0 pronto localmente: página única `src/app/page.tsx`, todo o texto em `src/content.ts`. Lint e build passando;
  conferido no navegador em desktop (1280px) e mobile (375px).
- Seções: hero Pavaneli (cita "Pava MC") · Quem rima (bio + lançamentos) · Batalha da SAN (próxima edição,
  endereço com link de mapa, números, bio) · REPCO · Ouvir/seguir (Spotify, Instagram pessoal, Instagram batalha)
  · Contato (placeholder "chama no Instagram" enquanto `contact: null`).
- Fotos: `photo: null` em cada seção mostra placeholder de fita amarela/preta. Trocar: arquivo em `public/fotos/`
  e `photo: { src, alt }` no `content.ts` (passo a passo no README).
- Estética: fundo `#0b0b0a`, texto `#f1ede3`, destaque amarelo fita `#f2e600`; títulos Anton, texto Archivo.
- Ficam **fora do site** por decisão do usuário (09/11/2026): lista de campeões e o nome "Blecaute".
  Também fora: seguidores, editais, roadmap, significado da sigla SAN.
- Próxima edição no site: 19/11/2026. Não atualiza sozinha: editar `batalha.nextEdition` a cada edição.
- Onde olhar em sessão nova: `CLAUDE.md` (regras e comandos), este arquivo (contexto), `README.md` (como editar).
