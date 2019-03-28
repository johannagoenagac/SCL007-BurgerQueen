import React, { Component } from 'react';
import './Orders.css';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.props = { ...props }
        this.state = {
            ordersArray: [],
            total: 0,
        }
    }

    componentDidUpdate(props) {
        //this.props = {...this.props, props};
        if (props.items.length !== this.state.ordersArray.length) {
            this.setState((state, props) => {
                return { ordersArray: props.items }
            });

        }
    }

    render() {
        let newSum = 0;
        for (let i = 0; i < this.state.ordersArray.length; i++) {
            newSum += this.state.ordersArray[i].price

        }
        if (newSum !== this.state.sum) {
            this.setState({ sum: newSum })
        }
        let items = this.state.ordersArray.map((e) => {
            return (
                <React.Fragment>
                    
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.type}</td>
                        <td>{e.price}</td>
                        <td><i class="fas fa-trash-alt"></i></td>
                    </tr>
                </React.Fragment>
            )
        });


        return (

            <React.Fragment>
                 <table id="tableOrder" class="table table-dark"> 
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {items}
                         
                    </tbody>     
                </table>
                <h2 id="sum">Total: {this.state.sum}</h2>
                
               
            </React.Fragment>
        );
    }
}

export default Orders;