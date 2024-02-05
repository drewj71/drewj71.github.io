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

            // Close the vertical menu on mobile devices
            if (window.innerWidth <= 768) {
                const hamburgerMenu = document.querySelector('.hamburger-menu');
                const mainMenu = document.querySelector('.main-menu');
                hamburgerMenu.classList.remove('active');
                mainMenu.classList.remove('active');
            }
        });
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainMenu = document.querySelector('.main-menu');
    const verticalMenu = document.querySelector('.vertical-menu');

    // Toggle active class on hamburger icon and main menu
    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });

    // Close the vertical menu when clicking outside of it
    document.addEventListener('click', function(e) {
        const isMenuClicked = verticalMenu.contains(e.target);
        const isHamburgerClicked = hamburgerMenu.contains(e.target);

        if (!isMenuClicked && !isHamburgerClicked) {
            hamburgerMenu.classList.remove('active');
            mainMenu.classList.remove('active');
        }
    });

    // Close the vertical menu if the screen size is increased
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) { // Adjust the threshold as needed
            hamburgerMenu.classList.remove('active');
            mainMenu.classList.remove('active');
        }
    });
});
