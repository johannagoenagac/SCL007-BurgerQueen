import React, { Component } from 'react';
import firebase from 'firebase';
import './Kitchen.css';


class Kitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
           
        }
}

    componentDidMount() {

        firebase.database().ref('kitchen/').on('value', (snapshot)=> {
            
           const showOrder = snapshot.val();

            this.setState({
                ...this.state,
                arr: Object.values(showOrder)
            })
    
        });
           
    }

    render() {
        return (
     <div className="container">   
     <div className="row">

           {this.state.arr.map(e=>(
               <div id="orderContainer">
                   <p id="name">{e.name}</p><br/>
                   <p>{e.order.map(elem=>{
                       return(
                        <ul id="listOrder">
                           <li>{elem.name}</li>
                           {<li>{elem.type}</li>}
                           
                        </ul>
                       )
                   }
                       
               
           )}</p>
           <button><i class="fas fa-check-square"></i></button>
        </div>)
           )}
            
            {/* {this.state.Order.map(e=>( */}
          {/* <div>
               <ul>
                  <li>{e.order}</li>
              </ul>
          </div> */}
            {/* ))} */}
     

      </div>
        </div>
          )
}

}

export default Kitchen;