import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Kitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }



    }
    render() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Producto</th>
                        <th>Check</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        
                    </tr>
                </tbody>
            </Table>
        )
    }

};
export default Kitchen;