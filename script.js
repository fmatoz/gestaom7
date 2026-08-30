/* Gestão M7 — landing page estática
   Conteúdo, links de WhatsApp e microanimações. */

/** Número de WhatsApp comercial (formato internacional, somente dígitos). */
var WHATSAPP_NUMBER = "5511953875997";

/** E-mail comercial de contato. */
var CONTACT_EMAIL = "contato@gestaom7.com.br";

/** Mensagens pré-preenchidas por contexto de CTA. */
var WHATSAPP_MESSAGES = {
  geral: "Olá! Vim pelo site da Gestão M7 e gostaria de conversar sobre meu negócio.",
  sites: "Olá! Vim pelo site da Gestão M7 e gostaria de saber mais sobre criação de sites.",
  ia: "Olá! Vim pelo site da Gestão M7 e gostaria de saber mais sobre automações e agentes de IA.",
  trafego: "Olá! Vim pelo site da Gestão M7 e gostaria de saber mais sobre gestão de tráfego pago.",
};

/** Monta um link wa.me com a mensagem codificada. */
function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

/** Ícones em SVG inline (sem dependências externas). */
var ICONS = {
  globe:
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
  bot:
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M8 14h.01M16 14h.01M9 18h6"/></svg>',
  megaphone:
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11v2a2 2 0 0 0 2 2h2l9 4V5L7 9H5a2 2 0 0 0-2 2Z"/><path d="M19 9a3 3 0 0 1 0 6"/></svg>',
};

var SERVICES = [
  {
    icon: ICONS.globe,
    title: "Sites &amp; Landing Pages",
    tagline: "Sites profissionais pensados para transformar visitas em oportunidades.",
    bullets: [
      "Sites institucionais",
      "Landing pages de alta conversão",
      "Design responsivo",
      "Integração com WhatsApp",
      "Estrutura pronta para anúncios",
    ],
    highlight: "Landing Pages a partir de R$ 349",
    cta: "Quero criar meu site",
    key: "sites",
  },
  {
    icon: ICONS.bot,
    title: "Inteligência Artificial &amp; Automações",
    tagline: "Automatize atendimentos e processos que hoje dependem de trabalho manual.",
    bullets: [
      "Agentes de IA para WhatsApp",
      "Atendimento e qualificação de leads",
      "Automações de processos",
      "Integrações com sistemas",
      "Planilhas, APIs e ferramentas conectadas",
    ],
    cta: "Quero automatizar minha empresa",
    key: "ia",
  },
  {
    icon: ICONS.megaphone,
    title: "Gestão de Tráfego Pago",
    tagline: "Coloque sua empresa na frente de pessoas que realmente podem comprar.",
    bullets: [
      "Meta Ads",
      "Google Ads",
      "Geração de leads",
      "Campanhas para WhatsApp",
      "Campanhas para sites e landing pages",
      "Otimização baseada em dados",
    ],
    cta: "Quero anunciar minha empresa",
    key: "trafego",
  },
];

var PROBLEMS = [
  {
    title: "Depende apenas do Instagram",
    description: "Sua empresa não possui uma presença digital própria e profissional.",
  },
  {
    title: "Demora para responder clientes",
    description: "Leads chegam, mas o atendimento depende completamente de alguém disponível.",
  },
  {
    title: "Muito trabalho manual",
    description: "Informações são copiadas entre sistemas, planilhas e WhatsApp diariamente.",
  },
  {
    title: "Investe em anúncios sem estratégia",
    description: "O dinheiro é gasto, mas você não sabe exatamente o que está trazendo resultado.",
  },
];

var STEPS = [
  {
    title: "Você conta o que precisa",
    description: "Conversamos sobre seu negócio e o problema que deseja resolver.",
  },
  {
    title: "Definimos a melhor solução",
    description: "Indicamos o caminho mais adequado para seu cenário.",
  },
  {
    title: "Colocamos em prática",
    description: "Desenvolvemos, configuramos e entregamos a solução.",
  },
];

var CHAT = [
  { from: "cliente", text: "Oi, vocês fazem orçamento?" },
  { from: "ia", text: "Olá! Fazemos sim. Me conta rapidinho o que você precisa?" },
  { from: "cliente", text: "Preciso de um site para minha clínica." },
  { from: "ia", text: "Perfeito. Já anotei tudo e encaminhei para nossa equipe." },
];

var AI_FLOW = [
  "Cliente entra em contato",
  "IA atende",
  "coleta informações",
  "qualifica",
  "encaminha para sua equipe",
];

var FUNNEL = ["Anúncio", "Interesse", "Site/WhatsApp", "Cliente"];

var PILLARS = [
  "Estratégia",
  "Criação de campanhas",
  "Monitoramento",
  "Otimização",
  "Análise de dados",
];

var CONNECTED_FLOW = [
  { icon: ICONS.megaphone, label: "TRÁFEGO PAGO", description: "Atrai potenciais clientes." },
  { icon: ICONS.globe, label: "SITE / LANDING PAGE", description: "Apresenta sua empresa e sua oferta." },
  { icon: ICONS.bot, label: "IA + AUTOMAÇÃO", description: "Atende, organiza e acompanha os interessados." },
];

/** Escreve HTML em um container, se ele existir na página. */
function render(id, html) {
  var el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = html;
}

function renderContent() {
  render(
    "servicos",
    SERVICES.map(function (service) {
      return (
        '<article class="card">' +
        '<span class="icon" aria-hidden="true">' + service.icon + "</span>" +
        "<h3>" + service.title + "</h3>" +
        '<p class="sub">' + service.tagline + "</p>" +
        "<ul>" +
        service.bullets
          .map(function (b) {
            return "<li>" + b + "</li>";
          })
          .join("") +
        "</ul>" +
        (service.highlight ? '<p class="callout">' + service.highlight + "</p>" : "") +
        '<a class="btn btn-solid" data-wa="' + service.key + '" href="#">' + service.cta + "</a>" +
        "</article>"
      );
    }).join(""),
  );

  render(
    "problemas",
    PROBLEMS.map(function (problem) {
      return (
        '<article class="card">' +
        "<h3>" + problem.title + "</h3>" +
        '<p class="sub">' + problem.description + "</p>" +
        "</article>"
      );
    }).join(""),
  );

  render(
    "etapas",
    STEPS.map(function (step, index) {
      return (
        '<li class="card">' +
        '<span class="step-num">' + (index + 1) + "</span>" +
        "<h3>" + step.title + "</h3>" +
        '<p class="sub">' + step.description + "</p>" +
        "</li>"
      );
    }).join(""),
  );

  render(
    "chat",
    CHAT.map(function (m) {
      return '<div class="msg ' + m.from + '">' + m.text + "</div>";
    }).join(""),
  );

  render(
    "fluxo-ia",
    AI_FLOW.map(function (step, index) {
      return (
        "<li>" +
        '<span class="step">' + step + "</span>" +
        (index < AI_FLOW.length - 1 ? '<span class="arrow" aria-hidden="true"> → </span>' : "") +
        "</li>"
      );
    }).join(""),
  );

  render(
    "funil",
    FUNNEL.map(function (stage, index) {
      return (
        '<li class="card center">' +
        '<span class="sub" style="margin:0">Etapa ' + (index + 1) + "</span>" +
        "<h3>" + stage + "</h3>" +
        "</li>"
      );
    }).join(""),
  );

  render(
    "pilares",
    PILLARS.map(function (pillar) {
      return '<li class="card">' + pillar + "</li>";
    }).join(""),
  );

  render(
    "fluxo",
    CONNECTED_FLOW.map(function (step, index) {
      return (
        '<div class="card">' +
        '<span class="icon" aria-hidden="true">' + step.icon + "</span>" +
        "<h3>" + step.label + "</h3>" +
        '<p class="sub">' + step.description + "</p>" +
        "</div>" +
        (index < CONNECTED_FLOW.length - 1
          ? '<span class="down" aria-hidden="true">↓</span>'
          : "")
      );
    }).join(""),
  );

  var copyright = document.getElementById("copyright");
  if (copyright) {
    copyright.textContent =
      "© " + new Date().getFullYear() + " Gestão M7. Todos os direitos reservados.";
  }
}

/** Aplica os links de WhatsApp em todos os elementos com data-wa. */
function applyWhatsappLinks() {
  var nodes = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];
    var key = node.getAttribute("data-wa");
    var message = WHATSAPP_MESSAGES[key] || WHATSAPP_MESSAGES.geral;
    node.setAttribute("href", whatsappLink(message));
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener noreferrer");
  }
}

/** Revela as seções conforme entram na viewport. */
function setupReveal() {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    for (var i = 0; i < items.length; i += 1) items[i].classList.add("visible");
    return;
  }
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  for (var j = 0; j < items.length; j += 1) observer.observe(items[j]);
}

document.addEventListener("DOMContentLoaded", function () {
  renderContent();
  applyWhatsappLinks();
  setupReveal();
});
