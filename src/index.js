import React from "react";
import ReactDOM from "react-dom";

import './SeasonDisplay.css';

import SeasonDisplay from "./SeasonDisplay";
import ShowMessage from "./ShowMessage";
import LoadingDisplay from "./LoadingDisplay";

class App extends React.Component {
    state = {
        lat: null,
        lang: null,
        err: '',
        errClass: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            positionError => {
                this.setState({
                    err: positionError.message,
                    errClass: 'error'
                })
            }
        )
    }

    displayContent() {
        if (this.state.err && !this.state.lat) {
            return (
                <div>
                    <ShowMessage err={this.state.err} class={this.state.errClass}/>
                </div>
            )
        }

        if (!this.state.err && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat}/>
                </div>
            )
        }

        return (
            <div>
                <LoadingDisplay message={`Please accept geolocation`}/>
            </div>
        )
    }


    render() {
        return (
            <div className={`container`}>
                {this.displayContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document
        .querySelector(
            '#root'
        )
)
