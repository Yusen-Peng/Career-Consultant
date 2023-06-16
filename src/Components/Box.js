import React, { Component } from 'react'
class Box extends Component(){
    constructor(props){
        super(props)

        this.state = {
            number: ''
        }
    }

    handle = (event) => {
        this.setState({
            number: event.target.value
        })
    }

    render(){
        return (
            <form>
                <div>
                    <label>Enter a number from 1 to 10 (inclusive)</label>
                    <input 
                        type="text" 
                        value={this.state.number} 
                        onChange={this.handle}
                    />
                </div>
            </form>
        )
    }
}

export default Box