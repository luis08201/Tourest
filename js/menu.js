let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    let header = document.getElementById("header");
    header.classList.toggle("active");
})