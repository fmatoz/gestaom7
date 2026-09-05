/* Gestão M7 — interações essenciais da landing page. */

var WHATSAPP_NUMBER = "5511953875997";
var WHATSAPP_MESSAGES = {
  geral: "Olá! Vim pelo site da Gestão M7 e gostaria de identificar oportunidades para melhorar os resultados da minha empresa.",
  sites: "Olá! Vim pelo site da Gestão M7 e gostaria de conversar sobre um site ou landing page para minha empresa.",
  ia: "Olá! Vim pelo site da Gestão M7 e gostaria de entender como a IA e as automações podem ajudar minha empresa.",
  trafego: "Olá! Vim pelo site da Gestão M7 e gostaria de conversar sobre tráfego pago e geração de oportunidades.",
};

function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function track(eventName, details) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.assign({ event: eventName }, details || {}));
}

function applyWhatsappLinks() {
  var nodes = document.querySelectorAll("[data-wa]");
  nodes.forEach(function (node) {
    var context = node.getAttribute("data-wa") || "geral";
    var message = WHATSAPP_MESSAGES[context] || WHATSAPP_MESSAGES.geral;
    node.setAttribute("href", whatsappLink(message));
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener noreferrer");
    node.addEventListener("click", function () {
      track("whatsapp_click", { context: context, label: node.textContent.trim() });
    });
  });
}

function setupMenu() {
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("menu-principal");
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  }

  toggle.addEventListener("click", function () {
    var shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
    menu.classList.toggle("is-open", shouldOpen);
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    toggle.setAttribute("aria-label", shouldOpen ? "Fechar menu" : "Abrir menu");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) closeMenu();
  });
}

function setupReveal() {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (item) { item.classList.add("visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(function (item) { observer.observe(item); });
}

function setupInternalLinkTracking() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      track("internal_navigation", { destination: link.getAttribute("href") });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var copyright = document.getElementById("copyright");
  if (copyright) copyright.textContent = "© " + new Date().getFullYear() + " Gestão M7. Todos os direitos reservados.";
  applyWhatsappLinks();
  setupMenu();
  setupReveal();
  setupInternalLinkTracking();
});
