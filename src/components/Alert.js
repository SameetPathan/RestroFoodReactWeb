import React from 'react'

function Alert(props) {

    const capitalize=(word)=>{

        const lower=word.toLowerCase();
        return lower.chartAt(0).toUpperCase()+lower.slice(1);
    }

    return (
     props.alert &&   <div>
            <div className={`alert alert-dismissible fade show alert-${props.alert.type}`} role="alert">
                <strong> {props.alert.message}</strong>
            </div>
        </div>
    )
}

export default Alert
