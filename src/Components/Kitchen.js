import React, { Component } from 'react';
import './Kitchen.css'



class Kitchen extends Component {
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
        document.getElementById("cliente").value = '';
    }

    render(props) {
        return (

            <div class="container">
                <div class="row">

                    <button id="kitchenBtn">Cocina</button>

                    
                    <p>{props.state.value}</p>




                </div>
            </div>

        )
    }


}


export default Kitchen
