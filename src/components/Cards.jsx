import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

export const Cards = () => {
    return (
        <CardGroup style={{ width: '1425px' }} className="rounded mx-auto bg-secondary">
            <Card className="bg-secondary">
                <Card.Img variant="top" src="./images/loc_1.jpg" />
                <Card.Body>
                    <Card.Title class="text-white"><h4>Sucursal Puerto Montt</h4></Card.Title>
                    <Card.Text class="text-light">
                        Surcursal Puerto Montt Centro, estacionamiento.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="rounded mx-auto">
                    <Button variant="dark" >Reservar</Button>
                </Card.Footer>
            </Card>
            <Card className="bg-secondary">
                <Card.Img variant="top" src="./images/loc_2.jpg" />
                <Card.Body>
                    <Card.Title class="text-white"> <h4>Sucursal Codillera</h4></Card.Title>
                    <Card.Text class="text-light">
                        Sucursal La Parva, con acceso a canchas de sky.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="rounded mx-auto">
                    <Button variant="dark" >Reservar</Button>
                </Card.Footer>
            </Card>
            <Card className="bg-secondary">
                <Card.Img variant="top" src="./images/loc_3.jpg" />
                <Card.Body>
                    <Card.Title class="text-white"><h4>Sucursal Costa</h4></Card.Title>
                    <Card.Text class="text-light">
                        Sucursal Costa, con estacionamiento.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="rounded mx-auto">
                    <Button variant="dark">Reservar</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}
