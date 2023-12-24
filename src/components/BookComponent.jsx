import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from 'react-time-picker';
import '../styles/Sample.css';
import 'react-clock/dist/Clock.css';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import moment from 'moment'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

export const BookComponent = () => {
    const [hour, onHour] = useState('11:00');
    // const horaReserva = hour;
    const [dateState, setDateState] = useState(new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }));

    const changeDate = (e) => {
        setDateState(e)
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center m-5">
                    <Col md="auto" className="justify-content-md-center m-5">
                        <Calendar value={dateState} onChange={changeDate} />
                    </Col>
                    <Col md="auto" className="justify-content-md-center m-5">
                        <h4>Hora Seleccionada: {hour}</h4>
                        <h4>Fecha Seleccionada: <b>{moment(dateState).format('MMMM Do YYYY')}</b></h4>
                        <TimePicker onChange={onHour} value={hour} />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Nombre
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Correo
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <DropdownButton variant="outline-secondary" title="Sucursal" id="input-group-dropdown-1">
                            <Dropdown.Item href="#">Santiago</Dropdown.Item>
                            <Dropdown.Item href="#">Valparaizo</Dropdown.Item>
                            <Dropdown.Item href="#">Concepción</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="justify-content-md-center m-5">
                        <Button variant="secondary" size="lg">Reservar</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
