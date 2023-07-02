import { getBooksByCategory } from "../api";

export function getBookcard(categories, titles, authors, images) {
    

    for (let i = 0; i < categories.length; i++) {
    
        let category = categories[i].textContent;
        getBooksByCategory(category)
            .then(response => {
                for (let j = 0; j < 20; j++) {
                
                    const a = Math.floor(Math.random() * response.data.length);
                    titles[j].textContent = response.data[a].title
                    authors[j].textContent = response.data[a].author
                    images[j].src = response.data[a].book_image
                    
                }
            
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    
}
