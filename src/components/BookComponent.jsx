import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from 'react-time-picker';
import '../styles/Sample.css';
import 'react-clock/dist/Clock.css';
import { Col, Container, Row } from 'react-bootstrap';
import moment from 'moment'

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
                    </Col>
                </Row>
            </Container>
        </>
    );
}
