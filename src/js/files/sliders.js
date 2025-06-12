export default function sliders() {
  const modelsSlider = document.querySelector(".s-models__slider");

  if (modelsSlider) {
    const swiper = new Swiper(modelsSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 12,
      grabCursor: true,
      scrollbar: {
        el: ".s-models .slider-scrollbar",
        draggable: true,
      },
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        480: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
      },
    });
  }
}
