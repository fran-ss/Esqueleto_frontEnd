import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {Contact} from "../DTO/contactDTO"

export default function Home(){
  const[contacts, setContacts]= useState<Contact[]>([])
  useEffect(()=>{
    fetch("http://localhost:3333/contact").then((data)=>data.json().then((response)=>setContacts(response)))
  },[])
  return(
    <div>
      {contacts.map(contact=>(
        <Link to ={`/detail/${contact.id}`}>
        <h1>{contact.name}</h1>
        </Link>
      )

      )}
    </div>
  )
}














//npm create vite@latest
//npm install
//npm run dev
//intala cars 
//npm install react-router-dom

