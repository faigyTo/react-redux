import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedBook } from "../store/actions/bookActions";

const EditBook = () => {

    let book=useSelector(state=>state.selectedBookForEdit);
    let dispatch=useDispatch();
    const [details,setDetails]=useState({...book});

    const change=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value});
    }

    const send=(e)=>{
        e.preventDefault();
        dispatch(saveEditedBook(details));
    }

    return ( <form onSubmit={send}>

        <p>עריכת פרטי ספר</p>
        <label>שם ספר</label>
        <input type="text" name='bookName' value={details.bookName} onChange={change} />
        <label>מחיר</label>
        <input type="number" name="price" value={details.price} onChange={change}/>
        <label>שם מחבר</label>
        <input type='text' name="author"value={details.author} onChange={change}/>
        <input type='submit' value='לשינוי⬅️'/>
    </form> );
}
 
export default EditBook;