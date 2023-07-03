import { getBooksByCategory } from "../api";

export function getBookcard(categories, titles, authors, images, ids) {
    
        let category = categories[0].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (i = 0; i < 5; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                   
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
    category = categories[1].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (i = 5; i < 10; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
    category = categories[2].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (i = 10; i < 15; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
    category = categories[3].textContent;
        getBooksByCategory(category)
            .then(response => {
                const arr = response.data.map(info => info)
                for (i = 15; i < 20; i++) {
                    
                
                    const a = Math.floor(Math.random() * arr.length);
                    images[i].src = arr[a].book_image
                    titles[i].textContent = arr[a].title
                    authors[i].textContent = arr[a].author
                    ids[i].id = arr[a]._id
                    const b = arr.indexOf(arr[a])
                    arr.splice(b, 1);
                }

            })
            .catch(error => {
                console.log(error);
            });
}
