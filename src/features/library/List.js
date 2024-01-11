import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { showForm } from "./book";

const List = () => {
    let bookArr=useSelector((st)=> st.libraryBook.bookArr);
    let bookAdd=useSelector((st)=>st.libraryBook.bookAdd);
    let dispatch=useDispatch();

    //let [add,setAdd]=useState(bookAdd);
    return ( <>
    <h1>ספריה</h1>
    <h2>רשימת הספרים</h2>
    <ul>
        {bookArr.map(item=>{return <li key={item.bookId}><ListItem  one={item}/></li>})}
    </ul>
    <input type="button" value='הוסף ספר חדש' onClick={()=>{dispatch(showForm(true))}}/>
    
    </> );
}
 
export default List;