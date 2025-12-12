/* 
 * MAIN SCRIPTS
 * Alumno: Aldhair Vera Camacho
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Proyecto Sabor Peruano cargado correctamente.");

    // Opcional: Cerrar menú móvil al hacer click (UX)
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
});
