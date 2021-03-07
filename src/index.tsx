import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reducer from './store/reducer';
import { createStore, Store } from "redux";
import { Provider } from "react-redux"

const store: Store<ArticleState, ArticleAction> &{
  dispatch:DispatchType
}= createStore(reducer);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

