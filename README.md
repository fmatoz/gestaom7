# Gestão M7 — versão estática

Página completa em três arquivos, pronta para hospedar no GitHub Pages.

```
static-site/
├── index.html   # estrutura e conteúdo
├── styles.css   # design system e responsividade
└── script.js    # conteúdo dinâmico, links de WhatsApp e animações
```

## Como publicar no GitHub Pages

1. Envie o conteúdo desta pasta para a raiz de um repositório.
2. Em **Settings → Pages**, selecione a branch (`main`) e a pasta `/root`.
3. Aguarde o deploy — não há build, é HTML/CSS/JS puro.

## Como alterar contatos

No topo de `script.js`:

- `WHATSAPP_NUMBER` — número em formato internacional (hoje `5511953875997`).
- `WHATSAPP_MESSAGES` — mensagem pré-preenchida de cada botão (`geral`, `sites`, `ia`, `trafego`).
- `CONTACT_EMAIL` — e-mail comercial (`contato@gestaom7.com.br`), também usado no rodapé do `index.html`.

## Pixels e analytics

O `index.html` tem um comentário reservado no `<head>` para instalar Meta Pixel,
Google Analytics, Google Ads Tag e Microsoft Clarity quando os IDs reais existirem.
