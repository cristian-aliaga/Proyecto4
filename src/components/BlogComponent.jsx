import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const BlogComponent = () => {
    const blocNote = collection(db, 'Blog')
    const commentRef = collection(db, 'Blog')
    const [nombre, setName] = useState("")
    const [comentario, setComent] = useState("")
    const [blogs, setBlog] = useState([])

    const createComent = async () => {
        await addDoc(commentRef, { nombre, comentario })
        getBlog()
    }
    const getBlog = async () => {
        const data = await getDocs(blocNote)
        setBlog(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getBlog()
    }, [])

    return (
        <>
            <h1>Blog Clientes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map(blog => (
                            <tr key={blog.id}>
                                <td>{blog.nombre}</td>
                                <td>{blog.comentario}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <input type='string' placeholder='Nombre' value={nombre} onChange={(event) => setName(event.target.value)}></input>
            <input type='string' placeholder='Comentario' value={comentario} onChange={(event) => setComent(event.target.value)}></input>
            <button onClick={createComent} >Agregar Comentario</button>
        </>
    )
}