export default function headerMobLocation() {
  const btn = document.querySelector("#header-mob-location-btn");
  const item = document.querySelector("#header-mob-location");

  if (item && window.matchMedia("(max-width: 767px)").matches) {
    btn.addEventListener("click", () => item.classList.toggle("_open"))
  }
}