// navbar scrolled
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); // Tambah class jika discroll
    } else {
      navbar.classList.remove("scrolled"); // Hapus class jika di atas
    }
  });
});
