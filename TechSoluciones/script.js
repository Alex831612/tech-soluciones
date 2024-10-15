document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
        
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
        
    window.addEventListener('scroll', handleScroll);
});

const bsCollapse = new bootstrap.Collapse("#navbarNavDropdown", {
        toggle: false,
});

      document.addEventListener("click", (e) => {
        if (!e.target.matches(".navbar a")) return false;

        bsCollapse.hide();
      });