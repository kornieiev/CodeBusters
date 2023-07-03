// Svitlana


//let mask = document.querySelector('.mask');

// window.addEventListener('load', () => {
//     mask.classList.add('hide');
//     setTimeout(() => {
//         mask.remove();
//     }, 1000);
// });

export function hideMask() {
    const mask = document.querySelector('.mask');
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
}

window.addEventListener('load', hideMask);

//export { hideMask };