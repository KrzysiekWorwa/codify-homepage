// src/scripts/swiper.ts
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function initPortfolioSwiper() {
  const el = document.querySelector(".portfolio-swiper") as HTMLElement | null;
  if (!el) return;

  // nie inicjuj 2x (Astro view transitions / hot reload)
  // @ts-ignore
  if (el.swiper) return;

  new Swiper(el, {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 64,
    speed: 650,
    grabCursor: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".portfolio-next",
      prevEl: ".portfolio-prev",
    },
  });
}

function run() {
  initPortfolioSwiper();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run, { once: true });
} else {
  run();
}

document.addEventListener("astro:page-load", run);