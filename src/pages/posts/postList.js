import React, {Component} from "react";
import PostItem from "@pages/posts/postItem";
import Loader from "@comp/loader/Loader";
import axios from "axios";
import ComFilter from "@comp/comFilter/comFilter";
import {connect} from "react-redux";
import {showNotifAllOKPosts, hideNotification,showNotifFailPosts} from "@redux/actions/notification";
import { Row, } from 'reactstrap';

class PostList extends Component{
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            posts: [],
            sort : "showAll",            
            loader: true,          
        }       
        this.filter = this.filter.bind(this);
        this.sortPosts = this.sortPosts.bind(this);
    }    

    render() {
        let {loader} = this.state;
        let posts = this.sortPosts();     

        return(
            <div>            

                {loader ? <Loader /> : <Row><ComFilter filterType={this.filter}/></Row>}               
                {posts.map((item)=> <PostItem item={item}                                    
                                     key={item.id} />
                )}
            </div>
        )
    }

    componentDidMount() {

        setTimeout(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response=>{
                    console.log("response in PostList",response.data)  
                    this.setState({ 
                        posts : response.data,
                        loader: false, 
                    },()=>{
                        this.props.showNotifAllOKPosts();                         
                        
                        setTimeout(()=>{
                            this.props.hideNotification(); 
                        },4000);
                    })
                })
                .catch(error=>{
                    console.log(error);
                    this.props.showNotifFailPosts();                         
                        
                        setTimeout(()=>{
                            this.props.hideNotification(); 
                        },4000);                     
                })
        },1000)

    }  

    filter (type) {
        this.setState({
            sort: type
        })
    }

    sortPosts () {
        let {posts, sort} = this.state;        

        const arrSort = [...posts.filter((item)=>{
            if(sort=="showAll") {
                return true
            }
            else if(sort=="show10" && item.id <=10) {
                return true
            }
            else if(sort=="show50" && item.id <=50) {
                return true
            }
            return false
        })];
        return arrSort;
    }
}


const mapStateToProps = (store)=>{   
    return {       
        notification : store.NotificationIndex,        
    }
}

const mapDispatchToProps = {    
    showNotifAllOKPosts, 
    hideNotification,
    showNotifFailPosts,
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)




