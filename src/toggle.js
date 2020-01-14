import React, { Component } from 'react'

export default class toggle extends Component {

state = {
    on: false,
}

toggle = () => {
    this.setState({
        on: !this.state.on
    })
}
    render() {
        return (
            <div>
                {/*this.props.children fixed the final problem I had with the toggle at first I was trying input the fetch varabiles in this component of course they are not declared here so didnt work. 
                Then through research I discovered I could use this children method. Then I can declare the vars on the app.js in render and it will work. */}
                {this.state.on && this.props.children}
                <button onClick ={this.toggle}>Show/Hide Details </button>
            </div>
        );
    }
}
