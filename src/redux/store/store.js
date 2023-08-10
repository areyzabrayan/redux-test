import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../reducers/todoListReducer";

const reducer = {todoList: todoListReducer};

const store = configureStore({reducer, devTools: process.env.NODE_ENV !== "production",})

export default store;