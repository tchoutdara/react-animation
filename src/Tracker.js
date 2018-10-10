import React from ' react'

class Tracker extends React.Component {
    state = {  x: 0, y: 0 }

    componentDidMont() {
        
    }

    move = ({ clientX, clientY }) => {
        this.setState({ x: clientX, y:clientY})
    }

    render() {
        const { x, y } = this.state
        return(
            <div>
                { this.props.children(this.state) }
            </div>
        )
    }
}

export default Tracker