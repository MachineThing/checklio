import React, {useState} from 'react';

const Title = (props) => {
    const [value, setValue] = useState("");

    return(
        <li className="list-group-item">
            <h1>{props.name}</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log(value);
                setValue("");
                // TODO: Make this actually send to the server
            }} className="d-flex">
                <input type="text" value={value} onChange={(event) => {setValue(event.target.value)}} className="form-control me-2" placeholder='Add new todo'></input>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </li>
    );
}

export const Item = (props) => {
    return(
        <li className="list-group-item">
            <label className="listItem">
                <input type="checkbox"></input>
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

export const List = () => {
    return(
        <div className="col-md-8 offset-md-2">
            <ul className="list-group">
                <Title name="My List"></Title>
                <Item>Create this app</Item>
                <Item>Make an example list</Item>
                <Item>Make checkbox look better</Item>
                <Item>Remove bugs</Item>
                <Item>Add less filter</Item>
            </ul>
        </div>
    );
}