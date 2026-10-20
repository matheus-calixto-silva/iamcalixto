**Plano de implementação de AEO e GEO para iamcalixto**

Plano elaborado em 5 de outubro de 2026, a partir do código local. As verificações em produção, de indexação e de resultados ficam previstas para a execução.

O objetivo proposto é facilitar a descoberta e a avaliação de Matheus Calixto por recrutadores e potenciais clientes, transformando visitas em contatos relevantes. As melhorias combinam SEO técnico, apresentação profissional e evidências de experiência. O Google recomenda esses fundamentos também para buscas com IA; não há uma configuração que garanta citações ou recomendações. [Orientação do Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

**Ponto de partida**

O projeto usa Next.js 16.2.2 e React 19, com uma página principal. Já existem título, descrição, canonical, Open Graph, JSON-LD `Person`, sitemap, robots e `llms.txt`. O conteúdo profissional é renderizado por componentes de servidor, com navegação interativa no cliente.

Foram identificadas as seguintes oportunidades:

- A imagem `og-image.jpg` referenciada nos metadados não existe no repositório.
- O sitemap usa `new Date()` como `lastModified`, sem vínculo com uma atualização efetiva do conteúdo.
- Informações profissionais estão repetidas entre componentes, metadados, manifest e `llms.txt`.
- A canonical é fixa no layout principal; novas páginas precisarão de URLs canônicas próprias.
- Não existem seções de cases ou perguntas frequentes.
- Não foi encontrada integração de analytics ou verificação de buscadores no código. Configurações externas podem já existir e precisam ser consultadas antes de cadastrar novamente.

1. **Confirmar posicionamento e registrar a situação inicial — prioridade alta**

   Adotar inicialmente o público de recrutadores e potenciais clientes. Antes de redigir novas afirmações, confirmar cargo, empresa atual, localização, disponibilidade e interesse em projetos freelance. Selecionar dois ou três trabalhos que possam ser apresentados publicamente.

   Para cada case, reunir contexto, problema, período, participação pessoal, decisões técnicas, stack, resultado e evidências públicas quando disponíveis. Resultados qualitativos são válidos; números precisam de uma fonte. Projetos pessoais também podem compor o portfólio, identificados como tais.

   Registrar a situação de indexação e desempenho atual, se houver acesso ao Google Search Console, Bing Webmaster Tools e analytics. Capturar a home em desktop e mobile para comparar o resultado visual.

   **Critério de conclusão:** informações profissionais confirmadas, objetivo de conversão definido e situação inicial registrada com as limitações de acesso identificadas. A correção técnica da etapa seguinte pode avançar enquanto os materiais dos cases são reunidos.

2. **Corrigir e organizar a base técnica — prioridade alta**

   Criar `src/data/profile.ts` para os dados profissionais reutilizados. Consumir essa fonte nos componentes, metadados e manifest; manter o resumo de `llms.txt` coerente com ela. Evitar transformar dados específicos de cada experiência em uma configuração genérica desnecessária.

   Em `src/app/layout.tsx`, configurar `metadataBase`, valores padrão de título e descrição e metadados de compartilhamento. Definir a canonical da home em `src/app/page.tsx` pela API de metadados, preparando as futuras páginas para declarar sua própria canonical. [API de metadados do Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

   Criar uma imagem de compartilhamento usando `src/app/opengraph-image.tsx`, com nome, função e identidade visual existente. Atualizar as referências e os metadados para os formatos de compartilhamento usados. Isso melhora a apresentação dos links; não deve ser contado como evidência de aumento de citações em IA. [Imagens Open Graph no Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).

   Em `src/app/sitemap.ts`, usar uma data de atualização real e mantida explicitamente, ou omitir `lastModified` quando ela não for conhecida. Manter apenas URLs publicadas e canônicas. Conferir `robots.ts` e, em produção, respostas HTTP, redirecionamentos, cabeçalhos e eventuais bloqueios de hospedagem.

   **Critério de conclusão:** metadados sem referências quebradas, imagem acessível, canonical correta, sitemap com datas confiáveis ou sem data desconhecida e conteúdo principal presente no HTML retornado pelo servidor.

3. **Aprimorar apresentação e respostas úteis — prioridade alta**

   Revisar `Hero.tsx` e `About.tsx` para apresentar nome, função, especialidades e tipos de solução com linguagem concreta. A primeira leitura deve permitir entender o que Matheus faz e onde sua experiência se aplica. Manter a hierarquia de títulos e o contato fácil de encontrar.

   Criar `src/data/faq.ts` e `src/components/FAQ.tsx`, com aproximadamente quatro a seis perguntas relevantes. Exemplos: quais tecnologias utiliza, que experiência possui com aplicações web e mobile, quais tipos de sistemas já desenvolveu e como entrar em contato. Disponibilidade e modelo de contratação entram depois de confirmados.

   Renderizar as respostas no servidor. Se houver expansão e recolhimento, usar uma interação acessível, como `details` e `summary`. Integrar a seção à home e à navegação. A FAQ terá valor pela utilidade do conteúdo; sua publicação não depende de adicionar `FAQPage` ao JSON-LD.

   Manter `Person` com um `@id` estável e propriedades verificáveis. Relacionar a página a essa pessoa usando `ProfilePage`, enquanto a home tiver como foco principal o perfil profissional, e identificar o site com `WebSite`. Os dados estruturados devem corresponder ao conteúdo visível. [Requisitos de ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

   **Critério de conclusão:** apresentação específica, perguntas respondidas com fatos confirmados, navegação por teclado funcional e JSON-LD válido e coerente com a página.

4. **Publicar evidências de experiência — prioridade alta, depende do conteúdo**

   Criar `src/data/projects.ts` e `src/components/Projects.tsx` com dois ou três trabalhos selecionados. Cada resumo deve explicar o problema, a contribuição pessoal e o resultado, com um link para o case completo.

   Para cases com conteúdo suficiente, criar `/projetos/[slug]` em `src/app/projetos/[slug]/page.tsx`, com geração estática das páginas publicadas. Organizar cada página em contexto, desafio, contribuição, decisões técnicas, resultado e evidências. Adicionar título, descrição, canonical, imagem de compartilhamento e contato contextual. Escolher dados estruturados adicionais somente quando representarem fielmente o material.

   Integrar os projetos à home e à navegação. Como a navegação será compartilhada entre rotas, seus links para seções da home devem funcionar também quando o visitante estiver em um case. Adicionar as URLs publicadas ao sitemap e atualizar `llms.txt`.

   **Critério de conclusão:** pelo menos dois cases completos quando houver material confirmado, links internos funcionais, URLs individuais com metadados próprios e slugs inexistentes retornando 404. Até haver conteúdo suficiente, publicar apenas os resumos que já forem úteis e verdadeiros.

5. **Validar, publicar e medir — prioridade alta**

   Executar `pnpm lint`, `pnpm exec tsc --noEmit` e `pnpm build`. Inspecionar o HTML da home e de um case, as canonicals, o JSON-LD, o sitemap, o robots e as imagens. Usar Schema Markup Validator e, para recursos suportados, Rich Results Test. Conferir mobile, desktop, teclado e comportamento dos contatos.

   Comparar o desempenho mobile antes e depois. Manter conteúdo e novos componentes no servidor; reservar JavaScript do cliente para interações que realmente precisam dele. A instrumentação de analytics deve carregar sem bloquear a interação inicial, seguindo as orientações da skill `vercel-react-best-practices`.

   Reutilizar a solução de analytics existente, se houver; caso contrário, selecionar uma solução leve. Registrar cliques em WhatsApp, e-mail, LinkedIn e links de cases, distinguindo intenção de contato de contatos efetivamente recebidos. Não enviar endereços de e-mail, telefones ou texto de mensagens nos eventos.

   Na publicação, verificar ou reutilizar as propriedades do Search Console e Bing Webmaster Tools, enviar o sitemap e inspecionar as páginas principais. Credenciais e verificações de propriedade são dependências dessa etapa, não das mudanças locais.

   **Critério de conclusão:** verificações locais aprovadas, validação visual concluída, endpoints corretos em produção e coleta de eventos conferida. Indexação e citações são resultados observados posteriormente, não condições controláveis pelo código.

6. **Avaliar resultados e ajustar — após a publicação**

   Usar uma janela inicial sugerida de 30 a 60 dias para observar tendências; um portfólio com pouco tráfego pode precisar de mais tempo. Comparar impressões, consultas, cliques orgânicos, visitas aos cases, cliques de contato e contatos qualificados recebidos.

   Consultar os relatórios de busca com IA disponíveis nas contas. O relatório AI Performance do Bing mostra citações e páginas citadas nas experiências que ele cobre; esses dados não representam todas as plataformas de IA. [Relatório do Bing](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/).

   Priorizar revisões de apresentação e cases conforme consultas e dúvidas reais. Conteúdo técnico autoral pode ser acrescentado quando houver experiência relevante para compartilhar. Manter `llms.txt` como resumo opcional: o Google informa que não usa esse arquivo para melhorar visibilidade ou ranqueamento. [Orientação do Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

   **Critério de conclusão:** comparação documentada com a situação inicial e próxima melhoria escolhida a partir dos dados disponíveis, sem atribuir automaticamente toda variação a AEO ou GEO.

**Andamento e trabalho restante**

| Entrega | Escopo | Estimativa de esforço |
| --- | --- | --- |
| Implementado no código | Perfil centralizado, metadados, imagem Open Graph, canonical, sitemap, FAQ, navegação e JSON-LD. | Concluído |
| Conteúdo a confirmar | Posicionamento final e dois ou três cases com contribuição e resultados comprováveis. | Cerca de 1 a 2 dias após receber o material |
| Medição e publicação | Search Console, Bing Webmaster Tools, analytics e revisão de URLs em produção. | Cerca de 0,5 a 1 dia após resolver acessos |
| Avaliação | Comparação de resultados e revisão de prioridades. | Após 30 a 60 dias de observação |

As estimativas são de trabalho ativo e pressupõem que o material e os acessos necessários estarão disponíveis. Espera por indexação não entra nesses prazos.

**Informações necessárias para executar o conteúdo**

- Prioridade entre recrutamento, freelance ou ambos.
- Confirmação das informações profissionais e da disponibilidade atual.
- Dois ou três projetos com contribuição pessoal, resultados e materiais que possam ser apresentados publicamente.
- Situação dos acessos a Search Console, Bing Webmaster Tools e analytics.

**Verificação local realizada:** `pnpm lint` e `pnpm exec tsc --noEmit --incremental false` concluíram sem erros. `pnpm exec next build --webpack` avançou até compilar os componentes, mas não terminou porque a compilação precisa baixar a fonte Inter de `fonts.googleapis.com`, indisponível no ambiente. A execução padrão do Turbopack também encontrou uma restrição local de portas neste ambiente.

Indexação, apresentação em produção e métricas reais dependem de deploy e acesso às contas de busca. Nenhuma alteração foi publicada em produção.
