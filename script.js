
    <script>
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    </script>