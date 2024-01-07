const initialState = {
    bookArr: [
        { bookName: "הספר הראשון שלי", bookId: "100", price: 60, imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSqcZHSh8u5PnI4dhSn-8g8az1TQ_nYMPYQ&usqp=CAU", author: "zzz" },
        { bookName: "עשרים ואחד בבית אחד", bookId: "101", price: 65, imageSrc:"https://www.sifreiorhachaim.co.il/wp-content/uploads/2023/05/2202.jpg", author: "yyy" },
        { bookName: "הפרשה מספרת לי", bookId: "102", price: 70, imageSrc:"https://www.sifreiorhachaim.co.il/wp-content/uploads/2021/05/1620213.jpg", author: "xxx" }
    ],
    selectedBook: null,
    selectedBookForEdit: null,
    bookAdd:false
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                selectedBook: null,
                selectedBookForEdit:null,
                bookArr: [...state.bookArr, action.payload],
                bookAdd:false,
            }
        case "DELETE_BOOK":
            return {
                selectedBook: null,
                selectedBookForEdit: null,
                bookArr: state.bookArr.filter(item => item.bookId != action.payload),
                bookAdd:state.bookAdd
            }

        case "SELECTED_BOOK_FOR_EDIT":
            return {
                selectedBook: null,
                selectedBookForEdit: action.payload,
                bookArr: state.bookArr,
                bookAdd:false
            }

        case "SAVE_EDITED_BOOK" :
            let copy=state.bookArr.map(item=>{
                if (item.bookId!==action.payload.bookId)
                    return item;
                return action.payload;
            })
            return{
                selectedBook: null,
                selectedBookForEdit:null,
                bookArr:copy,
                bookAdd:false
            } 
        case "SHOW_FORM":
            return{
                selectedBook:null,
                selectedBookForEdit:null,
                bookArr:state.bookArr,
                bookAdd:action.payload
            } 
            
        case "SHOW_BOOK" :
            return{
                selectedBook:action.payload,
                selectedBookForEdit:null,
                bookArr:state.bookArr,
                bookAdd:state.bookAdd
            }   
        default: return state;      
    }
}

