document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    const icon = themeToggle.querySelector('i');
    
    // Verificar preferência do usuário
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme');
    
    // Aplicar tema salvo ou preferência do sistema
    if (currentTheme === 'dark' || (!currentTheme && userPrefersDark)) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
    
    // Alternar tema
    themeToggle.addEventListener('click', function() {
        if (themeStyle.getAttribute('href') === 'css/light-mode.css') {
            setDarkTheme();
            localStorage.setItem('theme', 'dark');
        } else {
            setLightTheme();
            localStorage.setItem('theme', 'light');
        }
    });
    
    function setDarkTheme() {
        themeStyle.setAttribute('href', 'css/dark-mode.css');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    function setLightTheme() {
        themeStyle.setAttribute('href', 'css/light-mode.css');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Observar mudanças na preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        if (newColorScheme === 'dark' && !localStorage.getItem('theme')) {
            setDarkTheme();
        } else if (newColorScheme === 'light' && !localStorage.getItem('theme')) {
            setLightTheme();
        }
    });
});