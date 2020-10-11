import React, { useState } from "react"
import SearchBar from "./SearchBar"
import {useParams} from "react-router-dom"
//components
import BookTable from "./BookTable"

const BookList = (props) => {

    const {color} = useParams()
    console.log(color)

    const [query, setQuery] = useState("")

    let filteredBooks = props.books.filter(book =>
                book.title.toLowerCase().includes(query.toLowerCase()))

    if (color) {
        filteredBooks = filteredBooks.filter(book =>
            book.color.toLowerCase().includes(color.toLowerCase())); 
    }
    
    return (
        <div>
            <SearchBar handleFilter={setQuery}/>
            <BookTable books={filteredBooks} />
        </div>
        
    )
}

export default BookList;