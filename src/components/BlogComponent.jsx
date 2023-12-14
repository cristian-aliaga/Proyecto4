import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const BlogComponent = () => {
    const blocNote = collection(db, 'Blog')
    const commentRef = collection(db, 'Blog')
    const [nombre, setName] = useState("")
    const [comentario, setComent] = useState("")
    const [blogs, setBlog] = useState([])

    const d = new Date();
    const fechaBlog = d.toDateString()
    
    const createComent = async () => {
        await addDoc(commentRef, { fechaBlog, nombre, comentario })
        getBlog()
    }
    const getBlog = async () => {
        const data = await getDocs(blocNote)
        setBlog(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        setName("")
        setComent("")
    }

    useEffect(() => {
        getBlog()
    }, [])

    return (
        <>
            <h1>Blog Clientes</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Nombre</th>
                                    <th>Comentario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs.map(blog => (
                                        <tr key={blog.id}>
                                            <td>{blog.fechaBlog}</td>
                                            <td>{blog.nombre}</td>
                                            <td>{blog.comentario}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Nombre
                            </InputGroup.Text>
                            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" value={nombre} onChange={(event) => setName(event.target.value)} />
                            <InputGroup.Text id="inputGroup-sizing-default" >
                                Comentario
                            </InputGroup.Text>
                            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" value={comentario} onChange={(event) => setComent(event.target.value)} />
                        </InputGroup>
                        <Button variant="secondary" onClick={createComent} >Agregar Comentario</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}