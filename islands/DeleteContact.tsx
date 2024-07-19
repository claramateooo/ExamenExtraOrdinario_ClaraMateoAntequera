
import {FunctionComponent} from "preact";
import {useState} from "preact/hooks";
type Props={id:string; del:boolean;dni:string};

const DeleteContact: FunctionComponent<Props> =({dni,id,del})=>{
    const [delet,setDelete]=useState<boolean>(del);
    const toggleDelete=async(contactid:string,id:string)=>{
        const response=await fetch(`https://apicontacts.deno.dev/contact/${dni}/${id}`,{
            method:"DELETE" ,
            headers:{
                "Content-Type":"aplication/json", }, },
        );
    }
    return(
        <button onClick={()=>toggleDelete(dni,id)}>Delete</button>
    )
}

export default DeleteContact;