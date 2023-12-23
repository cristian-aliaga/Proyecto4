import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';

export const MenuComponent = () => {
    const menuDB = collection(db, 'Menu')
    const [menus, setMenu] = useState([])
    const [menusFilter, setMenuFilter] = useState([])
    const [show, setShow] = useState(false);

    const getMenu = async () => {
        const data = await getDocs(menuDB)
        setMenu(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    const handleSelect = (e) => {
        const resultFilter = menus.filter(checkMenu)
        function checkMenu(menu) {
            return menu.categoria == e
        }
        setMenuFilter(resultFilter)
        setShow(true)
    }

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <>
            <h1>Menú</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
                                Categoría
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={''}>Todo</Dropdown.Item>
                                <Dropdown.Item eventKey={'Aperitivo'}>Aperitivos</Dropdown.Item>
                                <Dropdown.Item eventKey={'Entradas'}>Entradas</Dropdown.Item>
                                <Dropdown.Item eventKey={'Fondo'}>Fondos</Dropdown.Item>
                                <Dropdown.Item eventKey={'Postre'}>Postres</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Categoria</th>
                                    <th>Producto</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menus.map(menu => (
                                        <tr key={menu.id}>
                                            <td>{menu.categoria}</td>
                                            <td>{menu.nombre}</td>
                                            <td>{menu.descripcion}</td>
                                            <td>{menu.precio}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    {/* <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Producto
                        </Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menusFilter.map(menu => (
                                        <tr key={menu.id}>
                                            <td>{menu.nombre}</td>
                                            <td>{menu.precio}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>

                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}