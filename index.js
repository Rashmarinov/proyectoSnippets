const carouselItems = document.querySelectorAll('.carousel-item');

const flechaIzquierda = document.querySelector('.carousel-arrow-left');
const flechaDerecha = document.querySelector('.carousel-arrow-right');

flechaDerecha.addEventListener('click', () => {
    for (let i = 0; i < carouselItems.length; i++){
        carouselItems[i].style.transform = 'translateX(-300%)';
    }
    console.log('derecha');
    
});


flechaIzquierda.addEventListener('click', () => {
    for (let i = 0; i < carouselItems.length; i++){
        carouselItems[i].style.transform = 'translateX(0%)';
    }
    console.log('izquierda')   
});