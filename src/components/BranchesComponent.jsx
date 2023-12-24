import React from 'react'
import { Container } from 'react-bootstrap'

export const BranchesComponent = () => {
    return (
        <>
            <Container className="justify-content-md-center p-5">
                <section>
                    <div>
                        <h3>Sucursal Costa:</h3>
                        <p>Ubicada en la V regiónde Valparaiso,</p>
                        <p>con vista privilegiada frente al mar.</p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1051.7741347224462!2d-71.68561078978895!3d-33.18328147870018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662095022c533e9%3A0xee4266fb3c033a7f!2sPlaya%20Grande!5e0!3m2!1sen!2sus!4v1703400799250!5m2!1sen!2sus"
                            width="800"
                            height="600"
                            loading="lazy"                    >
                        </iframe>
                    </div>
                </section>
            </Container>
        </>
    )
}
