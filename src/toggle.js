import React, { Component } from 'react'

export default class toggle extends Component {

state = {
     on: false,
}

_onPress(){
    const newState= !this.state.toggle1
    this.setState({toggle1:newState})
}

toggle = () => {
    const newState= !this.state.on
    this.setState({on:newState})
}


    render() {

        const {on} = this.state ;
        const textValue = on?"Hide":"Show";
        const buttonbg = on? "Red": 'dodgerblue';
      

        return (
            <div>
                {/*this.props.children fixed the final problem I had with the toggle at first I was trying input the fetch varabiles in this component of course they are not declared here so didnt work. 
                Then through research I discovered I could use this children method. Then I can declare the vars on the app.js in render and it will work. */}
                {this.state.on && this.props.children}
                <button style ={ {backgroundColor:buttonbg}} onClick={this.toggle}>{textValue}</button> 
            </div>
        );
    }
}
