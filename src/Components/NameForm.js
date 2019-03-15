import React from 'react';
import './NameForm.css';

function NameForm (props) {

  
      return (
        <form >
         
           
            <input id="client" type="text" value={props.name} placeholder="Nombre del cliente" onChange={props.onChange} />
          
            <button id="send" type="button" onClick={props.onClick}>Enviar</button> 
          
        </form>

       
      );
    }
  

  export default NameForm