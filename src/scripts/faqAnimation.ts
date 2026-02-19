import { animate } from "motion";

export function initFaqAccordion() {
    const items = document.querySelectorAll("details.faq-item");
    if (!items.length) return;

    items.forEach((details) => {
        const el = details as HTMLElement;

        if (el.dataset.faqInit === "1") return;
        el.dataset.faqInit = "1";

        const content = details.querySelector(".faq-content");
        const inner = details.querySelector(".faq-inner");

        if (!(content instanceof HTMLElement)) return;
        if (!(inner instanceof HTMLElement)) return;

        content.style.height = details.hasAttribute("open") ? "auto" : "0px";
        el.dataset.expanded = details.hasAttribute("open") ? "true" : "false";

        let controls: any = null;

        details.addEventListener("click", (e) => {
            e.preventDefault();

            if (controls?.cancel) controls.cancel();

            const isOpen = details.hasAttribute("open");

            if (!isOpen) {
                details.setAttribute("open", "");
                el.dataset.expanded = "true";

                content.style.height = "0px";

                controls = animate(
                    content,
                    {
                        height: ["0px", "auto"],
                        opacity: [0, 1],
                        y: [-6, 0],
                    },
                    { duration: 0.32, ease: "circInOut" }
                );

            } else {
                el.dataset.expanded = "false";

                const start = inner.scrollHeight;
                content.style.height = start + "px";

                controls = animate(
                    content,
                    {
                        height: [start + "px", "0px"],
                        opacity: [1, 0],
                        y: [0, -6],
                    },
                    { duration: 0.24, ease: "circInOut" }
                );

                controls.finished?.then(() => {
                    details.removeAttribute("open");
                });
            }
        });
    });
}
