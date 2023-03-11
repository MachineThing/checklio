import React, {useState} from 'react';

import { fetchMan } from '../util/fetcher';

const Item = (props) => {
    const [checked, setCheckState] = useState(props.checked)

    const onCheck = () => {
        fetchMan({
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.id,
                checked: !checked
            })
        }).then((data) => {
            setCheckState(!checked)
        }, (err) => {props.addAlert("danger", `Error sending PATCH request (${err})`)});
    }

    return(
        <li className="list-group-item">
            <label className="listItem">
            <input type="checkbox" onChange={onCheck} defaultChecked={checked}></input>
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

export const ItemContainer = (props) => {
    // Item container for holding item components
    return props.items.map(m => <Item key={m.id} id={m.id} checked={m.checked} addAlert={props.addAlert}>{m.value}</Item>)
}