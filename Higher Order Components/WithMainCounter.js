import React from "react";

const WithMainCounter = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCounter = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return <OriginalComponent
                name='Neeraj'
                count={this.state.count}
                incrementCounter={this.incrementCounter} />
        }
    }
    return NewComponent
}

export default WithMainCounter