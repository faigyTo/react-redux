import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./book";
import { useState } from "react";
const AddBook = () => {


let details={};
let bookAdd=useSelector(state=>state.libraryBook.bookAdd);
let dispatch=useDispatch();
const change=(e)=>{
    let inputName=e.target.name;
    let inputValue=e.target.value;
    details={...details,[inputName]:inputValue};
}

const send=(e)=>{
    e.preventDefault();
    dispatch(addBook(details));
}

    return ( <><form onSubmit={send}>
        <label>שם ספר</label>
        <input type="text" name='bookName' onChange={change} />
        <label>מחיר</label>
        <input type="number" name="price" onChange={change}/>
        <label>שם מחבר</label>
        <input type='text' name="author" onChange={change}/>
        <label>קוד</label>
        <input type="text" name='bookId' onChange={change}/>
        <labal>כתובת תמונה</labal>
        <input type='text' name='imageSrc' onChange={change}/>
        <input type='submit'/>
    </form>
    </> );
}
 
export default AddBook;