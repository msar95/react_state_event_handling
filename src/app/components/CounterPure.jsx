import React from "react";

export class CounterPure extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    onClick() {
        this.setState(state => { // Es wird nicht das bestehende state Objekt angepasst sonder ein komplett neues state Objekt wird erstellt
            return {
                value: state.value + 1 // Es wird ein komplett neues "value"-Objekt erstellt mit der Referenz zum alten value +1
            };
        });
    }

    render() {
        return (
            <div>
                <h3>Counter Value is : {this.state.value}</h3>
                <button onClick={() => this.onClick()}>Click me!</button>
            </div>
        )
    }
}