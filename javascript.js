// toggle theme
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".sidebar, .menu-icons, .toggle, .title, .sidebar, .webContent, .featured-title");

ball.addEventListener("click", () =>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active");
})