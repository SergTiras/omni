const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
});


function handleResize() {
    if (window.innerWidth < 641) {
        const mainText = document.querySelector('.main-text');
        const content = mainText.innerHTML;
        const textContainer = document.querySelector('#text-container');

        mainText.remove();

        textContainer.insertAdjacentHTML('beforeend', content);
    }
}

window.addEventListener('resize', handleResize);

handleResize();



