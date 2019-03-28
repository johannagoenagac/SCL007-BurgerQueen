import React, { Component } from 'react';
import {data} from '../Menu.json';
import './Breakfast.css';

export default class Breakfast extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }

        this.handleMenuBreakfast = this.handleMenuBreakfast.bind(this);
    }

    handleMenuBreakfast(){
        const menu = (data.breakfast).map((item) => {
            return (
                <button id="BtnBreak" type="button" className="btn btn-success btn-lg btn-menu"
                data-name={item.name}
                data-price={item.price}
                onClick={()=>this.props.getOption(item)}
                >
                {item.name}<br/>{item.price}
                </button>
            );
        });
        return menu;
    }

   

    render(){        
        return(
            <section className="btn-menu">
                <this.handleMenuBreakfast />
            </section>
        );
    }
}
