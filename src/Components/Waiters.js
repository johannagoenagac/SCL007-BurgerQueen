import React, { Component } from 'react';
import './Waiters.css';
import NameForm from './NameForm';



class Waiters extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {
        this.setState({
            ...this.state,
            value: event
        });
        document.getElementById("client").value = '';
    }

    render() {
        return (

            <div class="container" id="sections">
                <div class="row">

                    <div id="waiters">
                        <button id="waitersBtn">Garzones</button>

                        <div id="name">
                            <NameForm
                                onClick={this.handleClick}
                            />
                        </div>

                    </div>

                    <div id="kitchen">

                        <button id="kitchenBtn">Cocina</button>
                        <p>Ingresando pedido de:</p>
                        <p id="clientName">{this.state.value}</p>

                    </div>

                </div>

            </div>

        );
    }
}



export default Waiters;