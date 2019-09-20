import React from 'react';
import App from './component/App';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import Thunk from "redux-thunk"
import reducers from "../src/reducer"




const STORE = createStore(reducers,applyMiddleware(Thunk))

ReactDOM.render(
    <Provider store={STORE}>
    <App />
    </Provider>
    , document.getElementById('root'));
