import React from 'react';

export const Item = () => {
    return(
        <li className="list-group-item"><label className="listItem"><input type="checkbox"></input><span></span> Cool item A</label></li>
    )
}

export const List = () => {
    return(
        <div className="col-md-8 offset-md-2">
            <ul className="list-group">
                <li className="list-group-item">My list</li>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ul>
        </div>
    )
}