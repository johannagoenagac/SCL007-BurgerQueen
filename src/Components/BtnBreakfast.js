import React from 'react';
import './BtnBreakfast.css';



function BtnBreakfast(props){

    return(

        <button id="BBreakfast"type="button" className="btn btn-warning btn-lg buttons" onClick={props.onClick}>Desayuno</button>
    )

}

export default BtnBreakfast;





















// export default class SectionMenu extends Component {
//     constructor(props) {
//         super(props);

//         this.handleChangeBreakfast = this.handleChangeBreakfast.bind(this);


//         this.state = {
//             breakfast: this.props.breakfasMenu,

//         }
//     }

//     handleChangeBreakfast() {
//         this.setState({ breakfast: this.props.breakfasMenu });
//         console.log("hola");
//     }

//     render() {
//         if (this.state.breakfast) {
//             return (
//                 <section className="col-md-7">

//                     <section className="mr-auto">
//                         <button type="button" className="btn btn-warning btn-lg buttons" onClick={this.handleChangeBreakfast}>Desayuno</button>
//                     </section>

//                     <Breakfast />
//                 </section>
//             );
//         }
//         else {
//             return (
//                 <section className="col-md-7">
//                     <section className="mr-auto">
//                         <button type="button" className="btn btn-warning btn-lg buttons" onClick={this.handleChangeBreakfast}>Desayuno</button>
//                     </section>

//                 </section>
//             );

//         }
//     }
// }