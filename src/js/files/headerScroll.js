export default function headerScroll() {
  const header = document.querySelector(".header");
  const headeLine = document.querySelector(".header-line");

  if (header) {
    const height = header.clientHeight + headeLine.clientHeight;
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < height) {
        header.classList.remove("_shadow");
        return
      }

      if (scrollTop > lastScrollTop && scrollTop >= height) {
        header.classList.add("_hide");
        header.classList.remove("_shadow");
      } else {
        header.classList.remove("_hide");
        header.classList.add("_shadow");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }
}
