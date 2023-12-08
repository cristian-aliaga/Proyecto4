import '../styles/FormatContact.css'
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/Placeholder';

export const FormContact = () => {
    const contactForm = collection(db, 'Contact')
    const [nombre, setName] = useState("")
    const [correo, setEmail] = useState("")
    const [telefono, setPhone] = useState("")
    const [asunto, setTopic] = useState("")
    const [mensaje, setMessageClient] = useState("")
    const [apellido, setLastName] = useState("")

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    const createComent = async () => {
        await addDoc(contactForm, { nombre, apellido, correo, telefono, asunto, mensaje })
    }

    return (
        <>
            <div className='div'>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>
                        <Row className="mb-3">
                            <Col xs={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control placeholder="Nombre" value={nombre} onChange={(event) => setName(event.target.value)} required />
                                    <Form.Control.Feedback type="invalid">
                                        Compo Obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control placeholder="Apellidos" value={apellido} onChange={(event) => setLastName(event.target.value)} required />
                                    <Form.Control.Feedback type="invalid">
                                        Compo Obligatorio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Col xs={7}>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type='email' placeholder="usuario@correo.com" value={correo} onChange={(event) => setEmail(event.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Compo Obligatorio.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs={7}>
                            <Form.Group className="mb-3" controlId="formGridAddress2 validationCustom05">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control placeholder="+56 9 9999 9999" value={telefono} onChange={(event) => setPhone(event.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Compo Obligatorio.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs={7}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Asunto</Form.Label>
                                    <Form.Select value={asunto} onChange={(event) => setTopic(event.target.value)}>
                                        <option>Consulta</option>
                                        <option>Sugerencia</option>
                                        <option>Reclamo</option>
                                        <option>Otro</option>
                                    </Form.Select >
                                </Form.Group >
                            </Row>
                        </Col>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control value={mensaje} onChange={(event) => setMessageClient(event.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Compo Obligatorio.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit" onClick={createComent}>
                            Contactar
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}