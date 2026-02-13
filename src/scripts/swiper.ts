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
    speed: 650,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: { enabled: true },
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