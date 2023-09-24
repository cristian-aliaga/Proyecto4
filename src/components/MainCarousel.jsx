import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const MainCarousel = () => {
    return (
        <Carousel data-bs-theme="dark" className="bg-secondary">
            <Carousel.Item>
                <img
                    className="d-block w-75 rounded mx-auto bg-secondary"
                    src="./images/tun_1.jpg"
                    alt="Vegetariano"
                />
                <Carousel.Caption>
                    <h1 class="text-white">Platos Frescos</h1>
                    <p class="text-white">Gran cantidad de ensaldas y platos vegetarianos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75 rounded mx-auto"
                    src="./images/tun_2.jpg"
                    alt="Carnes"
                />
                <Carousel.Caption>
                    <h1 class="text-white">Carnes, Aves y Pescados</h1>
                    <p class="text-white">Pescados del día y los mejores cortes de carnes.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75 rounded mx-auto"
                    src="./images/tun_3.jpg"
                    alt="Postres"
                />
                <Carousel.Caption>
                    <h1 class="text-white">Postres</h1>
                    <p class="text-white">
                        Postres, tortas, helados y sugerencias del Chef.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}