import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export const BlogComent = () => {
    const commentRef = collection(db, 'Blog')
    const [nombre, setName] = useState("")
    const [comentario, setComent] = useState("")

    const createComent = async () => {
        await addDoc(commentRef, { nombre, comentario })
    }

     return (
        <>
            <input type='string' placeholder='Nombre' value={nombre} onChange={(event) => setName(event.target.value)}></input>
            <input type='string' placeholder='Comentario' value={comentario} onChange={(event) => setComent(event.target.value)}></input>
            <button onClick={createComent} >Agregar Comentario</button>
        </>
    )
}
