import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const FormContactShow = () => {
    const contactForm = collection(db, 'Contact')
    const [contacts, setContact] = useState([])
    const commentRef = collection(db, 'Blog')
    const [nombre, setName] = useState("")
    const [correo, setEmail] = useState("")
    const [telefono, setPhone] = useState("")
    const [asunto, setTopic] = useState("")
    const [mensaje, setMessage] = useState("")
    
    const getContact = async () => {
        const data = await getDocs(contactForm)
        setContact(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    
    const createComent = async () => {
        await addDoc(contactForm, { nombre, correo, telefono, asunto, mensaje })
    }

    useEffect(() => {
        getContact()
    }, [])

    return (
        <>
            <h1>Fromulario de Contacto</h1>
            <input type='string' placeholder='Nombre' value={nombre} onChange={(event) => setName(event.target.value)}></input>
            <input type='string' placeholder='Correo' value={correo} onChange={(event) => setEmail(event.target.value)}></input>
            <input type='string' placeholder='teléfono' value={telefono} onChange={(event) => setPhone(event.target.value)}></input>
            <input type='string' placeholder='Asunto' value={asunto} onChange={(event) => setTopic(event.target.value)}></input>
            <input type='string' placeholder='Mensaje' value={mensaje} onChange={(event) => setMessage(event.target.value)}></input>
            <button onClick={createComent} >Contactar</button>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Consulta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.nombre}</td>
                                <td>{contact.telefono}</td>
                                <td>{contact.consulta}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}