import { getBooksByCategory } from "../api";

export function getBookcard(categories, titles, authors, images) {
    

    for (let i = 0; i < categories.length; i++) {
        let category = categories[i].textContent;
        getBooksByCategory(category)
            .then(response => {
                const a = Math.floor(Math.random() * response.data.length);
                titles[i].textContent = response.data[a].title
                authors[i].textContent = response.data[a].author
                images[i].src = response.data[a].book_image
            })
    
    }
    
}
