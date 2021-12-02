import {NOTIFICATION_SHOW_ALL_LOAD_POSTS,NOTIFICATION_SHOW_FAIL_LOAD_POSTS,NOTIFICATION_SHOW_FAIL_LOAD_TODOS,NOTIFICATION_SHOW_ALL_LOAD_TODOS, NOTIFICATION_HIDE, NOTIFICATION_SHOW_REMOVE,NOTIFICATION_SHOW_REMOVE_NOT,NOTIFICATION_SHOW_UPDATE,} from "@redux/types";

export function showNotifAllOKPosts() {
    return {
        type : NOTIFICATION_SHOW_ALL_LOAD_POSTS,
        data : true ,        
    }
}

export function showNotifAllOKTodos() {  
    return {
        type : NOTIFICATION_SHOW_ALL_LOAD_TODOS,
        data : true ,
            }
}

export function showNotifFailPosts() {    
    return {
        type : NOTIFICATION_SHOW_FAIL_LOAD_POSTS,
        data : true ,
    }
}

export function showNotifRemove() {    
    return {
        type : NOTIFICATION_SHOW_REMOVE,
        data : true ,
    }
}

export function showNotifUpdate() {    
    return {
        type : NOTIFICATION_SHOW_UPDATE,
        data : true ,
    }
}

export function showNotifRemoveNot() {    
    return {
        type : NOTIFICATION_SHOW_REMOVE_NOT,
        data : true ,
    }
}

export function showNotifFailTodos() {    
    return {
        type : NOTIFICATION_SHOW_FAIL_LOAD_TODOS,
        data : true ,
    }
}

export function hideNotification() {  
    return {
        type : NOTIFICATION_HIDE,
        data : false
    }
}



