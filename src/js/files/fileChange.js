export default function fileChange() {
  const profileFile = document.querySelector("#profile-file");

  if (profileFile) {
    profileFile.addEventListener("change", (e) => {
      const label = document.querySelector("[for='profile-file']");

      if (e.target.files[0]) label.textContent = "Файл выбран"
    })
  }
}