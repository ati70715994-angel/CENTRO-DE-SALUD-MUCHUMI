document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#telemedicina-form");
  const message = document.querySelector("#telemedicina-mensaje");
  if (!form || !message) return;
  const email = "ati61050757@istrfa.edu.pe, ati";
  const whatsapp = "51927220019";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const channel = event.submitter?.dataset.canal;
    const fields = new FormData(form);
    const body = [
      "Solicitud de información sobre telemedicina - Centro de Salud de Mochumí",
      "",
      `Nombre: ${fields.get("nombre").trim()}`,
      `Teléfono de contacto: ${fields.get("telefono").trim()}`,
      `Solicitud: ${fields.get("motivo").trim()}`,
    ].join("\n");

    let url;
    if (channel === "gmail") {
      const params = new URLSearchParams({
        view: "cm",
        fs: "1",
        to: email,
        su: "Solicitud de telemedicina - Centro de Salud de Mochumí",
        body,
      });
      url = `https://mail.google.com/mail/?${params.toString()}`;
      message.textContent = "Se abrió Gmail con el destinatario y la solicitud. Revisa el borrador y pulsa Enviar.";
    } else if (channel === "whatsapp") {
      url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(body)}`;
      message.textContent = "Se abrió WhatsApp con la solicitud preparada. Revisa el mensaje y pulsa Enviar.";
    } else {
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  });
});
