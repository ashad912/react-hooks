import React, {useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext'
import { addBook } from '../actions/bookActions'

const NewBookForm = () => {
    //const {addBook} = useContext(BookContext) //useState approach
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {
            title: title,
            author: author,
        }})
        //addBook(title, author);
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type='text' placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type='text' placeholder="book author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type='submit' value='add book' />
        </form>
    )
}

export default NewBookForm