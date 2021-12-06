import { takeEvery } from "@redux-saga/core/effects";
import { TRY_TODO } from "redux/modules/todo/initialconst";
import { handleTodo } from "./handlers/todoHandlers";



export function* watcherSaga() {
    yield takeEvery(TRY_TODO, handleTodo)
}