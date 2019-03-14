import React from 'react';
import './NameForm.css';

function NameForm (props) {

  
      return (
        <form >
         
           
            <input id="client" type="text" placeholder="Nombre del cliente" />
          
            <button id="send" type="button" onClick={()=>props.onClick(document.getElementById("client").value)}>Enviar</button> 
          
        </form>

       
      );
    }
  

  export default NameForm