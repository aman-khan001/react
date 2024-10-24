import { createContext } from "react";

export const TodoItemsContext = createContext({
    todoitems: [],
    addItems: ()=>{},
    deleteItems: ()=>{},
})