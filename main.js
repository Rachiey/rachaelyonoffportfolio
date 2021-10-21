// //For dark/light theme toggle
const moonIcon = document.querySelector('.sun-moon-theme');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

// Load dark theme if it was toggled on
const darkThemeOn = sessionStorage.getItem("darktheme")
if (darkThemeOn==="true"){
    document.body.className = "dark-theme";
    moon.classList.add('hide-icon');
    sun.classList.remove('hide-icon');
}

moonIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    moon.classList.toggle('hide-icon');
    sun.classList.toggle('hide-icon');
    // Store toggle info between pages
    if (document.body.className.includes("dark-theme")){
        // Currently in dark mode
        sessionStorage.setItem("darktheme", "true")
    } else {
        // Currently in light mode
        sessionStorage.setItem("darktheme", "false")
    }
})