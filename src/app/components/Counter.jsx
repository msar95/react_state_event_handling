import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    onClick () {
        this.setState(state =>{
            state.value++;
            return state;
        })
    }

    render() {
        return (
            <div>
                <h3>Counter Value is : {this.state.value}</h3>
                <button onClick={() => this.onClick() }>Click me!</button>
            </div>
        )
    }
}