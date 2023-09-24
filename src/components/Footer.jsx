import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <>
            <Nav className="justify-content-end bg-body-tertiary" data-bs-theme="dark">
                <Nav.Item >
                    <Nav.Link className="text-white" href='https://www.facebook.com' target="_blank">Facebook</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-white" href='https://www.instagram.com' target="_blank">Instagram</Nav.Link>
                </Nav.Item>
                <Nav.Item> 
                    <Nav.Link className="text-white" href='https://www.youtube.com' target="_blank">Youtube</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
