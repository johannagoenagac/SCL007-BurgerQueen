import React, { Component } from 'react';
import './Waiters.css';
import NameForm from './NameForm';
import BtnBreakfast from './BtnBreakfast';
import Breakfast from './Breakfast';
import Meal from './Meal';
import BtnMeal from './BtnMeal';
// import { throwStatement } from '@babel/types';
import Orders from './Orders';


class Waiters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.name,
            BtnBreak: false,
            BtnMeals: false,
            handleChangeName: props.handleChangeName,
            onNameSelected: props.onNameSelected,
            printOrder:[],
        };

        this.handleClick = this.handleClick.bind(this);
        this.breakfastBtn = this.breakfastBtn.bind(this);
        this.MealBtn = this.MealBtn.bind(this);
        this.getOrder = this.getOrder.bind(this);
    }



    getOrder(item){
        const print = this.state.printOrder;
        print.push(item)
        this.setState({
            ...this.state,
            printOrder:print
            

        })
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
                                {this.state.BtnBreak && <Breakfast 
                                getOption={this.getOrder}/>
                                } 

                                <BtnMeal
                                    onClick={this.MealBtn} />
                                {this.state.BtnMeals && <Meal 
                                getOption={this.getOrder}/>
                                }


                            </div>

                        </div>

                    </div>


                    <div className="col-md-6">

                        <div id="kitchen">

                            <h2 id="kitchenBtn">Cocina</h2>
                            <p className="textOrder">Ingresando pedido de:</p>
                            <p id="clientName">{this.props.name}</p>
                            <Orders items={this.state.printOrder}/>

                        </div>

                    </div>

                </div>

            </div>

        );
    }
}



export default Waiters;