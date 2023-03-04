import React, {useState, useEffect} from 'react';

import { fetchMan } from '../util/fetcher.js';
import { ItemContainer } from './item.jsx';
import { Title } from './title.jsx';

export const List = (props) => {
    // Get items
    const [items, setItems] = useState([]);

    const update = () => {
        fetchMan({
            method: 'GET'
        }).then((data) => {setItems(data)}, (err) => {props.addAlert("danger", `Error getting list items (${err})`)});
    }

    // Fire once
    useEffect(() => {
        update();
    }, []);

    return(
        <div className="col-md-8 offset-md-2">
            <ul className="list-group">
                <Title name="My List" update={update} addAlert={props.addAlert}></Title>
                <ItemContainer items={items}/>
            </ul>
        </div>
    );
}