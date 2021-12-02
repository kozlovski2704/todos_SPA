import {combineReducers} from "redux";
import NotificationIndex from "./notification";
import Todos from "./todos";

export default  combineReducers({
    NotificationIndex,
    Todos
})