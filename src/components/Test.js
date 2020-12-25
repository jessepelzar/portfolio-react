import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }
    // state = {
    //     count: 0,
    //     message: "none"
    // }

    componentDidMount() {
        this.setState({count: this.state.count+1})
    }

    increment() {
        console.log("test");
        this.setState({
            count: this.state.count + 1
        })
        // console.log("dffddfdf");
    }
        
    render() {
        return (
            <div>
                <button onClick={this.increment}>click</button>
                {/* <input type="text" onChange={() => console.log("ffdssf")} /> */}
                <p className="text-lg-montserrat" >{this.state.count}</p>
                {/* <p className="text-lg-montserrat" >{message}</p> */}
            </div>
        );
    }
}

export default Test;