// Svitlana

export function hideMask() {
    const mask = document.querySelector('.mask');
    if (mask) {
        mask.classList.add('hide');
        setTimeout(() => {
            mask.remove();
        }, 600);
    }
}
window.addEventListener('load', hideMask);
