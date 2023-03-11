import React, {useState} from 'react';

//import 'bootstrap/dist/css/bootstrap.css';
//import './style/index.less';

import { List } from './list/list.jsx';
import { AlertsDisplay } from './popup.jsx';
import { TitleBar } from './titlebar.jsx';

const App = () => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = (type, msg) => {
        setAlerts([...alerts, ...[{
            "type": type,
            "msg": msg
        }]]);
    }

    return(
        <React.StrictMode>
            <TitleBar/>
            <List addAlert={addAlert}/>
            <AlertsDisplay alerts={alerts}/>
        </React.StrictMode>
    );
}

export default App

/*
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode><App /></React.StrictMode>);*/