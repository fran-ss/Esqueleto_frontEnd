import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Contact } from "../DTO/contactDTO"
const [contact, setContact] = useState<Contact>({}as Contact)
export  default function Detail(){
    const{id} = useParams()
    useEffect(()=>{
        fetch(`http://localost:3333/contact/${id}`).then(data => data.json().then((response)=> setContact(response)))
    },[])
    return(
        <div>
            <h2>{contact.name}</h2>
            <h3>{contact.telefone}</h3>
            <h3>{contact.email}</h3>
            <h3>{contact.endereco}</h3>
            
        </div>
    )
}