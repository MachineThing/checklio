import React, {useState} from 'react';

//import 'bootstrap/dist/css/bootstrap.css';

import { List } from './list/list.jsx';
import { TitleBar } from './titlebar.jsx';

const App = () => {
    return(
        <React.StrictMode>
            <TitleBar/>
            <List/>
        </React.StrictMode>
    );
}

export default App
/*
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode><App /></React.StrictMode>);*/