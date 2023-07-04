// тут буде логіка для розмітки яка буде створюватись з данних бекенду
export const renderBooks = ({books}) => {
return `
    <div class="bestsellers-list-item list">
        <ul class="bestsellers-list-second">
            ${books.map((book) => {
               return `
                <li>
                    <div class="bookcard">
                        <img class="bookcard-image" src="${book.book_image}" alt="book cover" width="280">
                        <h5 class="bookcard-name">${book.title}</h5>
                        <p class="bookcard-author">${book.author}</p>
                    </div>
                </li>
                `
            })}
                
        </ul>
    </div>
`
}