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
            value: '',
            BtnBreak: false,
            BtnMeals: false,

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
        document.getElementById("client").value = '';

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


                    <div className="col-md-7">
                        <div id="waiters">

                            <h1 id="waitersBtn">Garzones</h1>

                            <div id="name">
                                <NameForm
                                    onClick={this.handleClick}
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


                    <div className="col-md-5">

                        <div id="kitchen">

                            <h2 id="kitchenBtn">Cocina</h2>
                            <p className="textOrder">Ingresando pedido de:</p>
                            <p id="clientName">{this.state.value}</p>

                        </div>

                    </div>

                </div>

            </div>

        );
    }
}



export default Waiters;