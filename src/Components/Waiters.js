import React, { Component } from 'react';
import './Waiters.css';
import NameForm from './NameForm';
import BtnBreakfast from './BtnBreakfast';
import Breakfast from './Breakfast';
import Meal from './Meal';
import BtnMeal from './BtnMeal';
import Orders from './Orders';
import { database } from './provider';
import Kitchen from './Kitchen';



class Waiters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.name,
            BtnBreak: false,
            BtnMeals: false,
            handleChangeName: props.handleChangeName,
            onNameSelected: props.onNameSelected,
            printOrder: [],
            btnShowKitchen:false,
            total: 0,

        };

        this.handleClick = this.handleClick.bind(this);
        this.breakfastBtn = this.breakfastBtn.bind(this);
        this.MealBtn = this.MealBtn.bind(this);
        this.getOrder = this.getOrder.bind(this);
        this.handleFirebase = this.handleFirebase.bind(this);
        this.showKitchen=this.showKitchen.bind(this);
        this.delete = this.delete.bind(this);
    }

   
    
    showKitchen(){
        console.log('oli')
        this.setState({
            ...this.state,
            btnShowKitchen:true,

           
        })
    }

    handleFirebase() {

        const order = {
            name: this.props.name,
            order: this.state.printOrder
            
            // this.setState({
            //     ...this.state,
            //     printOrder:[]
            // })

        };
        console.log(order);
        let newPostKey = database.ref('kitchen').push().key;

        let updates = {};
        updates['kitchen/' + newPostKey] = order;

        return database.ref().update(updates, () => {
            this.setState({
                ...this.state,
                printOrder: [],
                total: 0,
               
            })
        });
    }


    getOrder(item) {
        const print = this.state.printOrder;
        print.push(item)
        this.setState({
            ...this.state,
            printOrder: print,
            total: this.state.total + item.price,


        })
    }

    delete(e){
        //console.log('iii')
        const copyArr = this.state.printOrder;
        const deleteTotal = this.state.total-e.price;
        let indice = copyArr.indexOf(e);
        copyArr.splice(indice,1)
        console.log(copyArr)
        //if (copyArr.length > 1) {
        this.setState({
            printOrder: copyArr,
            total: deleteTotal,
        })
    // }else {
    //     this.setState({
    //         printOrder: [],
    //         total: 0
    //     })
    // }
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

            {!this.state.btnShowKitchen &&
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
                                    getOption={this.getOrder} />
                                }

                                <BtnMeal
                                    onClick={this.MealBtn} />
                                {this.state.BtnMeals && <Meal
                                    getOption={this.getOrder} />
                                }


                            </div>

                        </div>

                    </div>


                    <div className="col-md-6">

                        <div id="kitchen">

                            <h2 id="kitchenBtn">Cocina</h2>
                            <p className="textOrder">Ingresando pedido de:</p>
                            <p id="clientName">{this.props.name}</p>
                            <Orders items={this.state.printOrder}
                                firebase={this.handleFirebase}
                                btnKitchen={this.showKitchen}
                                total={this.state.total}
                                delete2={this.delete}
                                
                            />

                            {this.state.functionbtn}


                        </div>

                    </div>

                </div>}

                    {this.state.btnShowKitchen &&
                    <Kitchen/>}
            </div>

        );
    }
}



     
    

export default Waiters;