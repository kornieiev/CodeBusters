// Svitlana

import { supportArray } from "./support-array";

const supportList = document.querySelector('.support-list-js');

let number = 0;
const serialNumber = value => {
    return String(value).padStart(2, '0');
}

const markupCard = ({ title, url, img1x, img2x }, number) => `<li class="support-item">
                <p class="support-number">${number}</p>
                <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
                <img srcset="${img1x} 1x, ${img2x} 2x" src="${img1x}" alt="${title}"></a>
            </li>`;


const createCard = supportArray.map((el, i) => {
    number = serialNumber(i + 1);
    return markupCard(el, number);
}).join('');

supportList.innerHTML = createCard;