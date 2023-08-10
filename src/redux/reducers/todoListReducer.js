import { todoListType } from "../types/todoListType";

const initialState = {todoList:[
    {
        id:1,
        name: "barrer",
        status: false
    },
    {
        id:2,
        name: "comprar",
        status: false
    }
]}

const todoListReducer = (state=initialState, actions) =>{
    switch(actions.type){
        case todoListType.CREATE_TODO: 
        return {...state, todoList:[...state.todoList, actions.payload]}
        default: 
        return state
    }
}

export default todoListReducer;