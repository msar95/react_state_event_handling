import React from "react";

import { Counter } from "./components/Counter";
import { CounterContainer } from "./components/CounterContainer";
import { CounterPure } from "./components/CounterPure";


export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter:</h1>
                <Counter />
                <hr />
                <h1>Counter-Pure:</h1>
                <CounterPure />
                <hr />
                <h1>Counter-Stateless:</h1>
                <CounterContainer />
            </div>

        )
    }
}
