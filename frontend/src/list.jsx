import React, {useState, useEffect} from 'react';

import { fetchMan } from './fetcher';

const Title = (props) => {
    // The title of the page, also holds the input form.
    const [value, setValue] = useState("");

    return(
        <li className="list-group-item">
            <h1>{props.name}</h1>
            <form onSubmit={(event) => {
                event.preventDefault();

                // Add todo
                fetchMan({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title: value})
                }).then((data) => {props.update()}, (err) => {props.addAlert("danger", `Error when POSTing list item (${err})`)});
                
                setValue("");
            }} className="d-flex">
                <input type="text" value={value} onChange={(event) => {setValue(event.target.value)}} className="form-control me-2" placeholder='Add new todo'></input>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </li>
    );
}

const Item = (props) => {
    const [checked, setCheckState] = useState(props.checked)

    return(
        <li className="list-group-item">
            <label className="listItem">
            <input type="checkbox" onChange={() => setCheckState(!checked)} defaultChecked={checked}></input>
                <span className="check-border">
                    <span className="check-back"></span>
                    <svg viewBox="0 0 24 24">
                        <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
                    </svg>
                </span>
                <p>{props.children}</p>
            </label>
        </li>
    );
}

const ItemContainer = (props) => {
    // Item container for holding item components
    return props.items.map(m => <Item key={m.id} checked={m.checked}>{m.value}</Item>)
}

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