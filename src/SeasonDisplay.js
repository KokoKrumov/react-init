import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: 'Die in hell it is summer',
        iconName: 'sun'
    },
    winter: {
        text: 'It\'s a fokin winter',
        iconName: 'snowflake'
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]

    return (
        <div>
            <i className={`icon massive ${iconName}`}/>
            <h1>
                {text}
            </h1>
            <i className={`icon massive ${iconName}`}/>
        </div>
    )
}

export default SeasonDisplay;
