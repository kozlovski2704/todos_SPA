import {ADD_TODO_LIST, ADD_TODO} from "@redux/types";

export function addAllTodo(list) {
    return {
        type : ADD_TODO_LIST,
        data : list
    }
}

export function addTodo(item) {
    return {
        type : ADD_TODO,
        data : item
    }
}

export function removeTodo(id) {
    return {
        type : ADD_TODO_LIST,
        data : id
    }
}

