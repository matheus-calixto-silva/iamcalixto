# iamcalixto

Portfólio de Matheus Calixto — desenvolvedor Full Stack em Recife, Brasil.
Disponível em três idiomas: português, inglês e espanhol.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Biome · pnpm

## Scripts

```bash
pnpm dev      # servidor de desenvolvimento
pnpm build    # build de produção
pnpm start    # serve o build
pnpm lint     # biome check
```

Requer Node 24.x (ver `engines` no `package.json`).

## Internacionalização (i18n)

Sem biblioteca: usa os recursos nativos do Next.js.

### URLs

| Idioma    | URL   |
| --------- | ----- |
| Português | `/`   |
| English   | `/en` |
| Español   | `/es` |

O português continua em `/` para manter a URL que já está indexada. Internamente
o `src/proxy.ts` reescreve `/` para `/pt`, e `/pt` redireciona (308) para `/`.

### Detecção de idioma

Acontece só na home (`/`), em `src/proxy.ts`, nesta ordem:

1. Cookie `NEXT_LOCALE` (gravado quando o visitante clica no seletor de idioma);
2. Crawlers e link previews sempre recebem português;
3. Cabeçalho `Accept-Language` (primeiro idioma suportado, por `q`). Idioma não
   suportado cai para inglês; sem cabeçalho, português.

### Estrutura

```
src/i18n/
  config.ts          # locales, locale padrão, metadados, helpers de URL
  types.ts           # interface Dictionary (garante que todos os idiomas tenham as mesmas chaves)
  get-dictionary.ts
  dictionaries/      # pt.ts, en.ts, es.ts
src/data/            # fatos independentes de idioma (empresas, tags, links, stack)
src/app/[lang]/      # layout, página e imagem Open Graph por idioma
src/proxy.ts         # redirecionamento / detecção
```

### Adicionar uma chave de texto

1. Adicione o campo em `Dictionary` (`src/i18n/types.ts`);
2. O TypeScript vai apontar os três dicionários que faltam preencher.

### Adicionar um idioma

1. Inclua o código em `locales` e em `localeMeta` (`src/i18n/config.ts`);
2. Crie `src/i18n/dictionaries/<codigo>.ts` e registre em `get-dictionary.ts`;
3. Se for detectável pelo navegador, ajuste `localeFromAcceptLanguage` em `src/proxy.ts`.

### SEO

Cada idioma tem `<html lang>`, título/descrição, canonical, `hreflang`
(com `x-default` apontando para `/`), entradas no sitemap com alternates,
JSON-LD (WebSite, Person, ProfilePage) e imagem Open Graph próprios.
