import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let loaded = false;

async function initParticles() {
    const targetId = "particles-js";
    const el = document.getElementById(targetId);
    if (!el) return;

    if (!loaded) {
        await loadSlim(tsParticles);
        loaded = true;
    }

    const existing = tsParticles.dom().find((p) => p.id === targetId);
    if (existing) await existing.destroy();

    await tsParticles.load({
        id: targetId,
        options: {
            fullScreen: { enable: false },
            background: { color: "transparent" },

            particles: {
                number: { value: 200, density: { enable: true, area: 500 } },
                color: { value: "#E7E7E7" },
                shape: { type: "circle" },
                opacity: { value: 0.25 },
                size: { value: 2 },
                move: { enable: true, speed: 0.4, outModes: { default: "out" } },
                links: {
                    enable: true,
                    distance: 160,
                    color: "#E7E7E7",
                    opacity: 0.15,
                    width: 1,
                },
            },

            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "repulse" },
                },
                modes: { repulse: { distance: 150, duration: 0.2 } },
            },

            detectRetina: true,
        },
    });
}

function run() {
    void initParticles();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
} else {
    run();
}

document.addEventListener("astro:page-load", run);