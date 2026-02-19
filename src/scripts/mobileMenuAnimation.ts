
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#mobile-menu details");

    items.forEach((details) => {
        if (!(details instanceof HTMLDetailsElement)) return;

        const summary = details.querySelector("summary");
        const panel = details.querySelector(".mobile-submenu");
        const inner = panel?.firstElementChild;

        if (!(summary instanceof HTMLElement)) return;
        if (!(panel instanceof HTMLElement)) return;
        if (!(inner instanceof HTMLElement)) return;

        panel.style.height = details.hasAttribute("open") ? `${inner.scrollHeight}px` : "0px";

        summary.addEventListener("click", (e) => {
            e.preventDefault();

            const isOpen = details.hasAttribute("open");

            if (!isOpen) {
                details.setAttribute("open", "");
                panel.style.height = "0px";

                requestAnimationFrame(() => {
                    panel.style.transition = "height 260ms ease";
                    panel.style.height = `${inner.scrollHeight}px`;
                });
            } else {
                const start = inner.scrollHeight;
                panel.style.height = `${start}px`;

                requestAnimationFrame(() => {
                    panel.style.transition = "height 220ms ease";
                    panel.style.height = "0px";
                });

                const onEnd = () => {
                    details.removeAttribute("open");
                    panel.removeEventListener("transitionend", onEnd);
                };
                panel.addEventListener("transitionend", onEnd);
            }
        });
    });
});