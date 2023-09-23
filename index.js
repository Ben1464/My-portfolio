let darkMode = false;
document.querySelector('#darkModeToggle').addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
});