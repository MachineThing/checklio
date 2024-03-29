import React, {useState, useEffect} from 'react';

import { fetchMan } from '../util/fetcher.js';
import { ItemContainer } from './item.jsx';
import { Title } from './title.jsx';

export const List = () => {
    // Get items
    const [items, setItems] = useState([]);

    const update = () => {
        fetchMan({
            method: 'GET'
        }).then((data) => {setItems(data)}, (err) => {console.error(`Error getting list items (${err})`)});
    }

    // Fire once
    useEffect(() => {
        update();
    }, []);

    return(
        <div className="col-md-8 offset-md-2">
            <ul className="list-group">
                <Title name="My List" update={update}></Title>
                <ItemContainer items={items}/>
            </ul>
        </div>
    );
}