import React, { Component } from 'react';
import Counter from "./counter";
import NavBar from './navbar';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        return counters[index].value >= 0 ? this.setState({ counters }) : false
    }

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter( c => c.id !== counterId);
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
               <NavBar />
                { this.state.counters.map(counter => 
                    <Counter 
                    key={counter.id} 
                    onDelete={ this.handleDelete } 
                    onIncrement={this.handleIncrement}
                    onDecrement = { this.handleDecrement } 
                    counter = {counter} />
                    )}
                <center><button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button></center>
            </React.Fragment>
        );
    }

}

export default Counters;