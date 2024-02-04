document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const offset = 50;

            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });

            // Close the menu if it's open
            document.querySelector('.main-menu').classList.remove('open');
        });
    });

    // Toggle menu function
    function toggleMenu() {
        var menu = document.querySelector('.main-menu');
        menu.classList.toggle('open');
    }

    // Add event listener to the navbar toggle button
    document.querySelector('.navbar-toggle').addEventListener('click', toggleMenu);

    // Add event listener to handle menu item clicks
    document.querySelectorAll('.main-menu li a').forEach(item => {
        item.addEventListener('click', toggleMenu);
    });

    // Add toggleMenu function to global scope for onclick attribute
    window.toggleMenu = toggleMenu;
});
