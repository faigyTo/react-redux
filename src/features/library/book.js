import {createSlice } from '@reduxjs/toolkit';



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

const librarySlice=createSlice({
    name:'libraryReducer',
    initialState:initialState,
    reducers:{
        addBook:(state,action)=>{
            state.bookArr.push(action.payload);
            
        },

        deleteBook:(state,action)=>{
            let newArr=state.bookArr.filter(item=>item.bookId!=action.payload);
            state.bookArr=newArr;
        },


        selectedBookForEdit:(state,action)=>{
            state.selectedBookForEdit=action.payload;
        },

        saveEditedBook:(state,action)=>{
            let copy=state.bookArr.map(item=>{
                if (item.bookId!==action.payload.bookId)
                    return item;
                return action.payload;})
            state.bookArr=copy;    
        },

        showForm:(state,action)=>{
            state.bookAdd=action.payload;
        },

        selectedBookForShow:(state,action)=>{
            state.selectedBook=action.payload;
        }
    }
})

export const {addBook,deleteBook,selectedBookForEdit,saveEditedBook,showForm,selectedBookForShow} = librarySlice.actions;
export default librarySlice.reducer;