import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { useSelector } from 'react-redux';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
//import { addBook } from './store/actions/bookActions';
import EditBook from './components/EditBook';

function App() {
  let selected=useSelector((st=>st.selectedBook));
  let bookAdd=useSelector(st=>st.bookAdd)
  let selectedBookForEdit=useSelector((st=>st.selectedBookForEdit))
  return (<>
    <List/>
    {selected&&<BookDetails/>}
    {bookAdd&&<AddBook/>}
    {selectedBookForEdit&&<EditBook/>}
    </>
  );
}

export default App;
