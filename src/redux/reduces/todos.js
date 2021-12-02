import {ADD_TODO_LIST, ADD_TODO, REMOVE_TODO, UPDATE_TODO} from  "@redux/types";
export default function Todos(store=[], action) {

    switch (action.type) {
        case ADD_TODO_LIST : {
            return [...action.data];
        }

        case ADD_TODO : {
            return [...store, action.data];
        }

        default : {
            return [];
        }
    }    
}