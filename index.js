let darkMode = false;
document.querySelector('#darkModeToggle').addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
});
let menu = document.getElementById("mobileMenu");
document.getElementById("menuToggle").addEventListener("click",function(){
    if (menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display ="none";
    }
});