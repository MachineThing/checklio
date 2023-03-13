import React from 'react';

export const AlertsDisplay = (props) => {
    var key = -1;
    return (
        <div className="alertsbox">
            {props.alerts.map(m => <Alert key={key += 1} type={m.type} message={m.msg} />)}
        </div>
    )
}

const Alert = (props) => {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
            <button aria-label="Close"><svg height="40" width="40"><line x1="10" y1="10" x2="30" y2="30" /><line x1="30" y1="10" x2="10" y2="30" /></svg></button>
            <p>{props.message}</p>
        </div>
    )
}