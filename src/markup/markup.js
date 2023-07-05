// тут буде логіка для розмітки яка буде створюватись з данних бекенду
export const renderBooks = ({books}) => {
    return `
    <div class="bestsellers-home">
        <h3 class="bestsellers-name">
                    <div class="bestsellers-name-first">${books[0].list_name}</div>
                    <div class="bestsellers-name-second">Books</div>
        </h3>
        <div class="bestsellers-list">
                <div class="bestsellers-list-item list">
                    <ul class="bestsellers-choose-list">
                        ${books.map((book) => {
                        return `
                            <li class="choose-list-item">
                                <div id="${book._id}" class="bookcard">
                                    <img class="bookcard-image" src="${book.book_image}" alt="book cover" width="280">
                                    <h5 class="bookcard-name">${book.title}</h5>
                                    <p class="bookcard-author">${book.author}</p>
                                </div>
                            </li>
                            `
                        })}
                            
                    </ul>
                </div>
        </div>
    </div>  
    `
}

