export function initContactForms() {
    const forms = document.querySelectorAll<HTMLFormElement>(
        'form[action="https://formspree.io/f/mwvnbpwl"]'
    );

    forms.forEach((form) => {
        if (form.dataset.bound === "true") return;
        form.dataset.bound = "true";

        const message = form.parentElement?.querySelector<HTMLElement>("[data-form-message]");
        const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

        if (!message || !button) return;

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            button.disabled = true;
            const originalText = button.textContent ?? "Wyślij";
            button.textContent = "Wysyłanie...";

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: { Accept: "application/json" },
                });

                if (response.ok) {
                    form.reset();
                    message.textContent = "✅ Wiadomość została wysłana, dziękujemy za kontakt!";
                    message.classList.remove("opacity-0");
                    message.classList.add("opacity-100");

                    setTimeout(() => {
                        message.classList.remove("opacity-100");
                        message.classList.add("opacity-0");
                    }, 5000);
                } else {
                    message.textContent = "Ups! Coś poszło nie tak. Spróbuj ponownie.";
                    message.classList.remove("opacity-0");
                    message.classList.add("opacity-100");
                }
            } catch {
                message.textContent = "Błąd połączenia. Spróbuj ponownie później.";
                message.classList.remove("opacity-0");
                message.classList.add("opacity-100");
            } finally {
                button.disabled = false;
                button.textContent = originalText;
            }
        });
    });
}
