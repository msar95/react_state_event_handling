import React from "react";

import { CounterStateless } from "./CounterStateless";

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

    
    render() {
        return (
            <div>
                <CounterStateless value={this.state.value} onClick={() => this.onIncrement()} />
            </div>
        )
    }
}