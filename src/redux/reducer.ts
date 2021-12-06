import { combineReducers } from "redux";

import { ThemeReducer, TodoReducer } from './modules'


export default combineReducers({
    ThemeReducer,
    TodoReducer
})