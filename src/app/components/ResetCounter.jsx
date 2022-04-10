import React from "react";

export class ResetCounter extends React.PureComponent {
    
    render() {
        const disabled = this.props.value === 0; //The disabled attribute is a boolean attribute. When present, it specifies that the button should be disabled
        return(
        <button disabled={disabled} onClick={this.props.onClick}>Reset back to Zero</button>
        )
    }
}
