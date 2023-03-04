import React, {useState} from 'react';

import { fetchMan } from '../util/fetcher';

export const Title = (props) => {
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