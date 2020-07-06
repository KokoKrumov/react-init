import React from "react";

const ShowMessage = (props) => {
    return (
        <div>
            <div className={`ui message ${props.class}`}>
                <p>
                    message: {props.err}
                </p>
            </div>
        </div>
    )
}

export default ShowMessage;
