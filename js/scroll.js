window.addEventListener("scroll", () => {
    const floatingBtn = document.getElementById("floatingBtn");
    floatingBtn.classList.toggle("show", window.scrollY > 50);
})