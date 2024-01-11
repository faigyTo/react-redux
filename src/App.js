import logo from './logo.svg';
import './App.css';
import List from './features/library/List';
import { useSelector } from 'react-redux';
import AddBook from './features/library/AddBook';
import BookDetails from './features/library/BookDetails';
//import { addBook } from './store/actions/bookActions';
import EditBook from './features/library/EditBook';

function App() {
  let selected=useSelector((st=>st.libraryBook.selectedBook));
  let bookAdd=useSelector(st=>st.libraryBook.bookAdd);
  let selectedBookForEdit=useSelector((st=>st.libraryBook.selectedBookForEdit));
  return (<>
    <List/>
    {selected&&<BookDetails/>}
    {bookAdd&&<AddBook/>}
    {selectedBookForEdit&&<EditBook/>}
    </>
  );
}

export default App;
