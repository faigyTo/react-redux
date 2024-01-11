import { useSelector } from "react-redux";

const  BookDetails= () => {
let bookArr=useSelector(state=>state.libraryBook.bookArr); 
let selectedBook= useSelector(state=>state.libraryBook.selectedBook); 
    return ( <div>
        :פרטי הספר
    <p>שם הספר  {selectedBook.bookName} </p>    
    <p> {selectedBook.author} :שם המחבר</p>    
    <p> {selectedBook.price} :מחיר</p>   
    <img style={{width:'200px'}} src={selectedBook.imageSrc}/> 
    </div> );
}
 
export default BookDetails;