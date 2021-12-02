import {NOTIFICATION_SHOW_ALL_LOAD_POSTS,NOTIFICATION_SHOW_FAIL_LOAD_POSTS,NOTIFICATION_SHOW_FAIL_LOAD_TODOS, NOTIFICATION_SHOW_ALL_LOAD_TODOS, NOTIFICATION_HIDE, NOTIFICATION_SHOW_REMOVE,NOTIFICATION_SHOW_REMOVE_NOT,NOTIFICATION_SHOW_UPDATE,} from  "@redux/types";

export default function NotificationFunction(store=false, action) {    
    switch (action.type) {  
        case NOTIFICATION_SHOW_ALL_LOAD_POSTS : {            
            return {                
                data : true ,
                text: "Everything is OK. All posts are loaded.",
                classCSS: "good",
            };
        }

        case NOTIFICATION_SHOW_REMOVE : {            
            return {               
                data : true ,
                text: "Todos was removed.",
                classCSS: "netural",
            };
        }

        case NOTIFICATION_SHOW_UPDATE : {            
            return {
                data : true ,
                text: "Todos was updated.",
                classCSS: "good",
            };
        }

        case NOTIFICATION_SHOW_REMOVE_NOT : {            
            return {               
                data : true ,
                text: "Something went wrong! Todos wasn`t deleted.",
                classCSS: "bad",
            };
        }

        case NOTIFICATION_SHOW_ALL_LOAD_TODOS : {            
            return {
                data : true ,
                text: "Everything is OK. All todos are loaded.",
                classCSS: "good",
            };
        }

        case NOTIFICATION_SHOW_FAIL_LOAD_POSTS : {            
            return {
                data : true ,
                text: "Something went wrong! Posts weren\`t uploaded",
                classCSS: "bad",
            };
        }

        case NOTIFICATION_SHOW_FAIL_LOAD_TODOS : {            
            return {
                data : true ,
                text: "Something went wrong! Todos weren\`t uploaded",
                classCSS: "bad",
            };
        }

        case NOTIFICATION_HIDE : {           
            return false
        }

        default : {
            return false;
        }
    }   
}