import React from "react";

class ClassProps extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.name}  {this.props.surname}</h2>
                {this.props.children}
            </>
        )
    }
}

export default ClassProps;