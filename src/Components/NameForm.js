import React from 'react';

function NameForm (props) {

  
      return (
        <form >
          <label>
            Nombre:
            <input id="client" type="text"  />
          </label>
          <button type="button" onClick={()=>props.onClick(document.getElementById("client").value)}>Enviar</button>
          
        </form>

       
      );
    }
  

  export default NameForm