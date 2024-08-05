document.addEventListener('DOMContentLoaded', function() {
    const testimonioText = document.querySelector('.testimonio-text');
    const animalOverlay = document.querySelector('.animal-overlay');

    // Efecto de paralaje suave en el scroll
    testimonioText.addEventListener('scroll', function() {
        const scrollPercentage = this.scrollTop / (this.scrollHeight - this.clientHeight);
        animalOverlay.style.transform = `scale(${1 + scrollPercentage * 0.1}) rotate(${scrollPercentage * 5}deg)`;
    });

    // Animación al cargar la página
    setTimeout(() => {
        testimonioText.style.opacity = '1';
        testimonioText.style.transform = 'translateY(0)';
    }, 300);
});