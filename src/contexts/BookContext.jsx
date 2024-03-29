import React, { createContext, useState, useEffect } from "react";
import {v1 as uuid} from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState(() => {
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : [];
    });

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid() }])
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
