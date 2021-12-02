// import React from "react";
// import TodoList from "@pages/todos/List";
// import PostList from "@pages/posts/postList";
// import Contacts from "@pages/contacts/contacts";
// import About from "@pages/about/about";
// import ErrorPage from "@pages/404/404";

import "@comp/style.core.scss";
import React, {Suspense } from 'react';
import Loader from "@comp/loader/Loader";
import Home from "@pages/home/home";

const TodosList  = React.lazy(()=>import(/* webpackChunkName: "todos" */ "@pages/todos/List"));
import TodosReadMore from "@pages/todos/ReadMore";

const PostList  = React.lazy(()=>import(/* webpackChunkName: "posts" */ "@pages/posts/postList"));
import PostReadMore from "@pages/posts/ReadMore";

const Contacts  = React.lazy(()=>import(/* webpackChunkName: "todos" */ "@pages/contacts/contacts"));
const About  = React.lazy(()=>import(/* webpackChunkName: "todos" */ "@pages/about/about"));

const ErrorPage  = React.lazy(()=>import(/* webpackChunkName: "404" */ "@pages/404/404"));

import Header from "@elems/Header";
import Footer from "@elems/Footer";
import NotificationComp from "@comp/notification/Notification";

import { 
    BrowserRouter as Router, 
    Switch,
    Route, Link
} from "react-router-dom";

import { Container, Row, Col, Nav, NavItem,} from 'reactstrap';
import {showNotifAllOKPosts,showNotifAllOKTodos,showNotifFailPosts,showNotifFailTodos} from "@redux/actions/notification";
import {connect} from "react-redux";

function Core(props) {

    return(<Router>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12}> 
                         <Header />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                    
                    <Nav tabs className={"menu"} >
                      
                        <NavItem >
                        <Link to={"/"} activeClassName={"active"}>Home</Link> 
                        </NavItem>
                        <NavItem>
                        <Link to={"/todos"}>Todos</Link>
                        </NavItem>
                        <NavItem>
                        <Link to={"/posts"}>Posts</Link>
                        </NavItem>
                        <NavItem>
                        <Link to={"/contacts"}>Contacts</Link> 
                        </NavItem>
                        <NavItem>
                        <Link to={"/about"}>About</Link>
                        </NavItem>
                        </Nav>
                    </Col>
                    <Col lg={12} md={12}>
                        <Switch>
                            ////*without Suspence start
                            {/* <Route exact path={"/"} component={Home}/> */}
                            {/* <Route exact path={"/todos"} component={TodoList}/> */}
                            {/* <Route exact path={"/posts"} component={PostList}/> */}
                            {/* <Route exact path={"/contacts"} component={Contacts}/> */}
                            {/* <Route exact path={"/about"} component={About}/> */}
                            ////*without Suspence end

                                <Route exact path={"/"} >
                                    <Suspense fallback={<Loader />}>
                                        <Home />
                                    </Suspense>
                                </Route>


                                <Route exact path={"/todos"} >
                                    <Suspense fallback={<Loader />}>
                                        <TodosList />
                                    </Suspense>
                                </Route>

                                <Route exact path={"/todos/:id/:test"} component={TodosReadMore}/>


                                <Route exact path={"/posts"} >
                                    <Suspense fallback={<Loader />}>
                                        <PostList />
                                    </Suspense>
                                </Route>

                                <Route exact path={"/posts/:userId/:id/:test"} component={PostReadMore}/>                                

                                
                                <Route exact path={"/contacts"} >
                                    <Suspense fallback={<Loader />}>
                                        <Contacts />
                                    </Suspense>
                                </Route>
                                
                                
                                <Route exact path={"/about"} >
                                    <Suspense fallback={<Loader />}>
                                        <About />
                                    </Suspense>
                                </Route>                         
                            <Route component={ErrorPage}/>
                        </Switch>                        
                    </Col>                 
                </Row>
                {props.notificationProp ? <NotificationComp status={props.notificationClass}>{props.notificationText}</NotificationComp> : null}
            </Container>           
                    <Col lg={12} md={12}> 
                         <Footer />
                    </Col>               
        </Router>
    )
}
/*
*^^^store^^^
*/
const mapStateToProps = (store)=>{
    return {        
        notificationProp : store.NotificationIndex.data,
        notificationText : store.NotificationIndex.text,
        notificationClass : store.NotificationIndex.classCSS,
    }
}

const mapDispatchToProps = { 
    showNotifAllOKPosts,
    showNotifAllOKTodos,
    showNotifFailPosts,
    showNotifFailTodos,

}

export default connect(mapStateToProps,mapDispatchToProps)(Core)

