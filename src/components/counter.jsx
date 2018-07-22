import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
     };

     styles = {
       fontWeight:40,
       color: "blue",
       margin: 20
     };

     marg = {
        marginLeft:30,
        marginBottom:20,
        marginTop:20
     }
     handleEvents = () => {
         this.setState({ value: this.state.value + 1});
     }

     handleEventsDec = () => {
         
        return this.state.value > 0 ? this.setState({ value: this.state.value - 1}) : false
    }
    render() {
        console.log("Props", this.props);
        return (
        <React.Fragment>
            {/* {this.props.children} */}
            
            <center>
            <span style={ this.marg } className={this.getBadgeClass()}>{this.formatCount()}</span>
            <span ></span>
            <button onClick={ () => this.props.onIncrement(this.props.counter) } style={{marginLeft:10}} className="btn btn-sm btn-success ">Increment</button>&nbsp;
            <button onClick={ () => this.props.onDecrement(this.props.counter) } style={{marginLeft:10}} className="btn btn-sm btn-danger ">Decrement</button>&nbsp;
            <button onClick= { () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">X</button>
            </center>
             {/* { <ul>
                { this.state.tags.map(tag => <li tag = {tag}>{ tag }</li>)}
            </ul> } */}
         </React.Fragment>
        );
    }

    getBadgeClass() {
        let test = "";
        test += this.props.counter.value === 0 ? "badge badge-warning" : "badge badge-primary";
        return test;
    }

    formatCount() {
        const  value  = this.props.counter.value;
        
        return value === 0 ? "Zero" : value;
        
    }
}

export default Counter;