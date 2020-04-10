import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { removeBook } from '../actions/bookActions'

const BookDetails = ({ book }) => {
    //const { removeBook } = useContext(BookContext) //useState approach
    const { dispatch } = useContext(BookContext)
    return ( //removeBook(book.id)
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className='title'>{ book.title}</div>
            <div className='author'>{ book.author }</div>
        </li>
     );
}
 
export default BookDetails;