import React from 'react';
import './BtnMeal.css';



function BtnMeal(props){

    return(

        <button id="BMeal"type="button" className="btn btn-warning btn-lg buttons" onClick={props.onClick}>Menu del día</button>
    )

}

export default BtnMeal;