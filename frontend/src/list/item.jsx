import React, {useState} from 'react';

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

export const ItemContainer = (props) => {
    // Item container for holding item components
    return props.items.map(m => <Item key={m.id} checked={m.checked}>{m.value}</Item>)
}