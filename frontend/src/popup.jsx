import React from 'react';

var key = -1;

export const AlertsDisplay = (props) => {
    return (
        <div className="alertsbox">
            {props.alerts.map(m => <Alert key={key += 1} type={m.type} message={m.msg} />)}
        </div>
    )
}

const Alert = (props) => {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
            {props.message}
        </div>
    )
}