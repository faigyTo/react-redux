export const addBook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}

export const deleteBook=(bookId)=>{
    return{
        type:"DELETE_BOOK",
        payload:bookId
    }
}

export const selectedBookForEdit=(book)=>{
    return{
        type:"SELECTED_BOOK_FOR_EDIT",
        payload:book
    }
}

export const saveEditedBook=(editedBook)=>{
    return{
        type:"SAVE_EDITED_BOOK",
        payload:editedBook
    }
}

export const showForm=(show)=>{
    return{
        type:"SHOW_FORM",
        payload:show
    }
}

export const selectedBookForShow=(book)=>{
    return{
        type:"SHOW_BOOK",
        payload:book
    }
}