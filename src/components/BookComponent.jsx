import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';

import TimePicker from 'react-time-picker';
import '../styles/Sample.css';

export const BookComponent = () => {
    const [day, setValue] = useState(new Date());
    const [hour, onHour] = useState('11:00');
    const horaReserva = hour;
    const fechaReserva = day;
    let fechaReservaString = fechaReserva.toString();
    
    function onChange(nextValue) {
        setValue(nextValue);
    }

    return (
        <>
            <Calendar onChange={onChange} value={day} />
            <TimePicker onChange={onHour} value={hour} />
            <p>{horaReserva}</p>
            <p>{fechaReservaString}</p>
        </>
    );
}
