import React, { Component } from 'react';
import {data} from '../Menu.json';
import './Meal.css';

export default class Meal extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }

        this.handleMenuMeal = this.handleMenuMeal.bind(this);
    }

    handleMenuMeal(){
        const menu = (data.meal).map((item) => {
            return (
                <button id="buttonMeal" type="button" className="btn btn-success btn-lg btn-menu"
                data-name={item.name}
                data-type={item.type}
                data-price={item.price}
                onClick={this.props.getOption}>
                {item.name}<br/>{item.type}<br/>{item.price}
                </button>
            );
        });
        return menu;
    }

    render(){        
        return(
            <section className="btn-menu">
                <this.handleMenuMeal/>
            </section>
        );
    }
}
