import React, {createContext, useState, useReducer, useEffect} from 'react';
import uuid from 'uuid/v1'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    /* changed to useReducer
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ])*/

    //other apporach
    /*
    const localBooks = JSON.parse(localStorage.getItem('books') || [])
    const [books, dispatch] = useReducer(bookReducer, localBooks)
    */

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    })
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books)) //overwriting with a new data
    }, [books])
    /*const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: uuid()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => {
            return book.id !== id
        }))
    }*/

    return (
        //<BookContext.Provider value={{books, addBook, removeBook}}> {/*can be 'removeBook: removeBook' etc. */} //version for useState
        <BookContext.Provider value={{books, dispatch}}> 
            {props.children}
        </BookContext.Provider>
    )
} 

export default BookContextProvider