import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import './style/index.less';

import { List } from './list.jsx';

const App = () => {
    return(
        <List />
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode><App /></React.StrictMode>);