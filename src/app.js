import '@static/scss/app.scss';
import React from 'react';
import { render } from 'react-dom';
import reduces from "@redux/reduces/index";
import {createStore} from "redux";
const store = createStore(reduces);
import {Provider} from "react-redux";
import Core from '@comp/Core';
 
render(<Provider store={store}><Core /></Provider>, document.getElementById('app'), () => {
  console.log('render with provider in APP');
});
