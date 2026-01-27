document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!(burger instanceof HTMLButtonElement)) return;
    if (!(mobileMenu instanceof HTMLElement)) return;

    const openMenu = () => {
        burger.setAttribute("aria-expanded", "true");
        burger.classList.add("open");
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
    };

    const closeMenu = () => {
        burger.setAttribute("aria-expanded", "false");
        burger.classList.remove("open");
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
    };

    const toggleMenu = () => {
        const isOpen = burger.getAttribute("aria-expanded") === "true";
        isOpen ? closeMenu() : openMenu();
    };
    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    mobileMenu.addEventListener("click", (e) => {
        const target = e.target;
        if (target instanceof HTMLElement && target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("mousedown", (e) => {
        const target = e.target;
        if (!(target instanceof Node)) return;

        if (!mobileMenu.contains(target) && !burger.contains(target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
});
