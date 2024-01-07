import { useDispatch } from "react-redux";
import { deleteBook,selectedBookForEdit,selectedBookForShow } from "../store/actions/bookActions";

const ListItem = ({one}) => {
    let dispatch=useDispatch();
    return ( <div>
        <h2>{one.bookName}</h2>
        {/* <p>{one.author}</p>
        <p>{one.price}</p>
        <img src={one.imageSrc}/> */}
        <input type="button" value='מחק' onClick={()=>{dispatch(deleteBook(one.bookId))}}/>
        <input type="button" value='ערוך'   onClick={()=>{dispatch(selectedBookForEdit(one))}}/>
        <input type="button" value='הצג פרטים'   onClick={()=>{dispatch(selectedBookForShow(one))}}/>
        
    </div> );
}
 
export default ListItem;