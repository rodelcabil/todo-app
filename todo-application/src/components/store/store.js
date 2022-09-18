import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import taskReducer from './taskSlice'

const rootReducer = combineReducers({
    theme: themeReducer,
    task: taskReducer
})


const store = configureStore({reducer: rootReducer});

export default store;

