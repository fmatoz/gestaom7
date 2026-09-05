# Site da Gestão M7

Landing page institucional publicada na Vercel em <https://www.gestaom7.com.br/>.

## Estrutura

- `index.html`: conteúdo, metadados sociais e dados estruturados.
- `styles.css`: identidade visual e responsividade.
- `script.js`: WhatsApp, menu móvel, animações e eventos de mensuração.
- `robots.txt` e `sitemap.xml`: descoberta pelos mecanismos de busca.
- `vercel.json`: cabeçalhos básicos de segurança.

## Contatos e mensagens

O telefone e as mensagens contextuais dos botões de WhatsApp ficam no início de `script.js`.
O e-mail aparece no rodapé e nos dados estruturados do `index.html`.

## Mensuração

Os cliques são enviados para `window.dataLayer` com os eventos:

- `whatsapp_click`: clique de contato, incluindo o contexto do serviço;
- `internal_navigation`: navegação entre seções.

Para registrar os eventos em uma plataforma externa, ainda é necessário adicionar o identificador real
do Google Tag Manager ou da ferramenta de análise escolhida. Nenhum identificador foi inventado ou
incluído no código.

## Publicação

Alterações enviadas à branch `main` são publicadas automaticamente pela Vercel.
