import Swiper from "swiper/bundle";
import "swiper/css/bundle";

type SwiperElement = HTMLElement & {
  swiper?: Swiper;
};

export function initPortfolioSwiper() {
  const el = document.querySelector(".portfolio-swiper") as SwiperElement | null;
  if (!el) return;

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