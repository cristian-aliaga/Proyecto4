import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const FormContact = () => {
    const contactForm = collection(db, 'Contact')
    const [nombre, setName] = useState("")
    const [correo, setEmail] = useState("")
    const [telefono, setPhone] = useState("")
    const [asunto, setTopic] = useState("")
    const [mensaje, setMessage] = useState("")
    
    const createComent = async () => {
        await addDoc(contactForm, { nombre, correo, telefono, asunto, mensaje })
    }

    return (
        <>
            <div>      
            <h1>Fromulario de Contacto</h1>
            <input type='string' placeholder='Nombre' value={nombre} onChange={(event) => setName(event.target.value)}></input>
            <input type='string' placeholder='Correo' value={correo} onChange={(event) => setEmail(event.target.value)}></input>
            <input type='string' placeholder='teléfono' value={telefono} onChange={(event) => setPhone(event.target.value)}></input>
            <input type='string' placeholder='Asunto' value={asunto} onChange={(event) => setTopic(event.target.value)}></input>
            <input type='string' placeholder='Mensaje' value={mensaje} onChange={(event) => setMessage(event.target.value)}></input>
            <button onClick={createComent} >Contactar</button>
            </div>
        </>
    )
}
