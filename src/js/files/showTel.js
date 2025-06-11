export default function showTel() {
  const tels = document.querySelectorAll(".show-tel");

  if (tels.length) {
    tels.forEach(tel => {
      const btn = tel.querySelector(".btn-rect");

      btn.addEventListener("click", () => {
        tel.classList.add("_show");
      })
    })
  }
}