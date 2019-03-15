import React, { Component } from 'react';
import './Waiters.css';
import NameForm from './NameForm';
import BtnBreakfast from './BtnBreakfast';
import Breakfast from './Breakfast';
import Meal from './Meal';
import BtnMeal from './BtnMeal';


class Waiters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.name,
            BtnBreak: false,
            BtnMeals: false,
            handleChangeName: props.handleChangeName,
            onNameSelected: props.onNameSelected,
        };

        this.handleClick = this.handleClick.bind(this);
        this.breakfastBtn = this.breakfastBtn.bind(this);
        this.MealBtn = this.MealBtn.bind(this);

    }

    handleClick(event) {
        this.setState({
            ...this.state,
            value: event
        });
        this.props.onNameSelected(event)


        // document.getElementById("clientName").value = '' ;

    }

    breakfastBtn() {
        this.setState({
            ...this.state,
            BtnBreak: true,
            BtnMeals: false,
        })
    }

    MealBtn() {
        this.setState({
            ...this.state,
            BtnMeals: true,
            BtnBreak: false,
        })
    }

    render() {
        return (

            <div className="container" id="sections">
                <div className="row">


                    <div className="col-md-6">

                        <div id="waiters">

                            <h1 id="waitersBtn">Garzones</h1>

                            <div id="name">
                                <NameForm
                                    onClick={this.state.onNameSelected}
                                    onChange={this.state.handleChangeName}
                                />
                            </div>

                        </div>

                        <div className="container">

                            <div id="BtnsMenu">

                                <BtnBreakfast
                                    onClick={this.breakfastBtn} />
                                {this.state.BtnBreak && <Breakfast />}


                                <BtnMeal
                                    onClick={this.MealBtn} />
                                {this.state.BtnMeals && <Meal />}



                            </div>

                        </div>

                    </div>


                    <div className="col-md-6">

                        <div id="kitchen">

                            <h2 id="kitchenBtn">Cocina</h2>
                            <p className="textOrder">Ingresando pedido de:</p>
                            <p id="clientName">{this.props.name}</p>

                            <table id="tableOrder" class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Hamburguesa simple con queso</td>
                                        <td>$2000</td>
                                        <td ><img className="iconGarbage" src="https://i.ibb.co/JBJySWC/rubbish-bin.png" alt="rubbish-bin" border="0" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Papas Fritas</td>
                                        <td>$500</td>
                                        <td><img className="iconGarbage" src="https://i.ibb.co/JBJySWC/rubbish-bin.png" alt="rubbish-bin" border="0" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Bebida 350ml</td>
                                        <td>$700</td>
                                        <td><img className="iconGarbage" src="https://i.ibb.co/JBJySWC/rubbish-bin.png" alt="rubbish-bin" border="0" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <th>Total</th>
                                        <th>$3200</th>
                                        <th></th>
                                    </tr>

                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>

        );
    }
}



export default Waiters;