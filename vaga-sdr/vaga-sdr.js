(() => {
  const ENDPOINT = "https://projetopessoal-n8n.h574he.easypanel.host/webhook/m7-vagas/candidatura-sdr";
  const form = document.querySelector("#application-form");
  const status = document.querySelector("#form-status");
  const submit = form?.querySelector("button[type='submit']");
  const whatsapp = form?.elements.whatsapp;
  const cooldownKey = "m7_sdr_last_submission";

  if (!form || !status || !submit) return;

  const setStatus = (message, type = "") => {
    status.textContent = message;
    status.className = `form-status ${type}`.trim();
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, "($1");
    if (digits.length <= 6) return digits.replace(/^(\d{2})(\d+)/, "($1) $2");
    if (digits.length <= 10) return digits.replace(/^(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
    return digits.replace(/^(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
  };

  whatsapp?.addEventListener("input", () => {
    whatsapp.value = formatPhone(whatsapp.value);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setStatus("");

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Confira os campos obrigatórios antes de enviar.", "error");
      return;
    }

    const lastSubmission = Number(localStorage.getItem(cooldownKey) || 0);
    if (Date.now() - lastSubmission < 60000) {
      setStatus("Sua candidatura já foi enviada. Aguarde um instante antes de tentar novamente.", "error");
      return;
    }

    const originalLabel = submit.querySelector("span").textContent;
    submit.disabled = true;
    submit.querySelector("span").textContent = "Enviando...";

    const payload = Object.fromEntries(new FormData(form).entries());
    payload.enviado_em_navegador = new Date().toISOString();

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.ok !== true) {
        throw new Error(result.message || "Não foi possível enviar agora.");
      }

      localStorage.setItem(cooldownKey, String(Date.now()));
      form.reset();
      setStatus("Candidatura enviada com sucesso! A equipe da Gestão M7 recebeu suas respostas.", "success");
      status.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (error) {
      setStatus(error.message || "Não foi possível enviar. Tente novamente em alguns instantes.", "error");
    } finally {
      submit.disabled = false;
      submit.querySelector("span").textContent = originalLabel;
    }
  });
})();
