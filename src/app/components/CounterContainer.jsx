import React from "react";

import { CounterStateless } from "./CounterStateless";
import { ResetCounter } from "./ResetCounter";

export class CounterContainer extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            value : 0};
    }

    onIncrement() {
        this.setState(state => {
            return {
                value : state.value +1
            }
        })
    }

    resetToZero() {
        this.setState({
            value : 0
        });
    }

    
    render() {
        return (
            <div>
                <CounterStateless value={this.state.value} onClick={() => this.onIncrement()} />
                <hr></hr>
                <ResetCounter value={this.state.value} onClick={() => this.resetToZero()} />
            </div>
        )
    }
}