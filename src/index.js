import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// Styles
import './styles/index.scss'
import { store } from "./components/Redux/Reducers/rootReducer";


ReactDOM.render(<>
    <Provider store={store}>
        <App />
    </Provider>
</>, document.getElementById('root'));