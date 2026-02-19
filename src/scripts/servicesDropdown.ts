document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("services-trigger");
    const dropdown = document.getElementById("services-dropdown");

    if (!(trigger instanceof HTMLElement)) return;
    if (!(dropdown instanceof HTMLElement)) return;

    let closeTimer: ReturnType<typeof setTimeout>;

    const position = () => {
        const r = trigger.getBoundingClientRect();
        const gap = 31;

        const left = r.left + r.width / 2 - dropdown.offsetWidth / 2;
        const top = r.bottom + gap;

        const pad = 12;
        const maxLeft = window.innerWidth - dropdown.offsetWidth - pad;
        const clampedLeft = Math.max(pad, Math.min(left, maxLeft));

        dropdown.style.left = `${clampedLeft}px`;
        dropdown.style.top = `${top}px`;
    };

    const open = () => {
        clearTimeout(closeTimer);
        position();
        dropdown.classList.remove("opacity-0", "invisible", "scale-y-0");
        dropdown.classList.add("opacity-100", "visible", "scale-y-100");
        trigger.setAttribute("aria-expanded", "true");
    };

    const close = () => {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
            dropdown.classList.add("opacity-0", "invisible", "scale-y-0");
            dropdown.classList.remove("opacity-100", "visible", "scale-y-100");
            trigger.setAttribute("aria-expanded", "false");
        }, 100);
    };

    trigger.addEventListener("mouseenter", open);
    trigger.addEventListener("mouseleave", close);
    dropdown.addEventListener("mouseenter", open);
    dropdown.addEventListener("mouseleave", close);

    window.addEventListener("resize", () => {
        if (trigger.getAttribute("aria-expanded") === "true") position();
    });

    window.addEventListener(
        "scroll",
        () => {
            if (trigger.getAttribute("aria-expanded") === "true") position();
        },
        { passive: true }
    );

    document.addEventListener("mousedown", (e) => {
        if (!(e.target instanceof Node)) return;
        if (!dropdown.contains(e.target) && !trigger.contains(e.target)) {
            close();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
    });
});
