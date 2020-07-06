import React from "react";


const LoadingDisplay = (props) => {
    return (
        <div className={`season-display`}>
            <div className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui massive text loader">{props.message}</div>
                </div>
            </div>
        </div>
    )
}

LoadingDisplay.defaultProps = {
    message: 'I\'m waiting ... '
}

export default LoadingDisplay;
