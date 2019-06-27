import React, { Component } from 'react';
import './Orders.css';

class Orders extends Component {
    
    
    asd2() {
        let items = this.props.items.map((e) => {
            return (
                <React.Fragment>
                    
                <tr>
                    <td key={e.name}>{e.name}</td>
                    <td key={e.type}>{e.type}</td>
                    <td key={e.price}>{e.price}</td>
                    <td><button onClick={()=>this.props.delete2(e)}><i class="fas fa-trash-alt" ></i></button></td>
                </tr>
            </React.Fragment>
        )
    })
    return items;
}
    render() {
        
           
        return (

            <React.Fragment>
                 <table id="tableOrder" className="table table-dark"> 
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.asd2()}
                        
                         
                    </tbody>    

                </table>
                
                <h2 id="sum">Total: {this.props.total}</h2>
                <div id="buttons">
                <button id="sendKitchen" onClick={this.props.firebase}><strong>Enviar a cocina</strong></button>
                <button id="showKitchen" onClick={this.props.btnKitchen}><strong>Mostrar Cocina</strong></button>
                </div>
            </React.Fragment>
        );
    }

}
export default Orders;