
import {FunctionComponent} from "preact";

import {useState} from "preact/hooks";


const Introducir:FunctionComponent =()=>{
   const [error,setError]= useState<string>("");
   const [dni,setDni]= useState<string>();
    const nuevalocalizacion=()=>{
  window.location.href="/contactos";
    }
    const verificarDni=(numeros: string)=>{
       if(numeros.length<9){
       setError("El DNI debe tener 9 caracteres");
    }}
    
return(
    <body>
    <div class="main-container">
        <div class="dni-input-container">
            <label for="dni">Introduce tu DNI:</label>
            <input placeholder="12345678A" type="text" id="dni" value={dni}
             onInput={(e)=>{ setError(""),setDni(e.currentTarget.value);verificarDni(e.currentTarget.value)}}/>
            <button onClick={nuevalocalizacion}>Ir a mi agenda</button>
        </div>
    </div>
    </body>
)
}
export default Introducir;