import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigasi = () => {
    return (
        <div >
            <Navbar bg="dark" variant="dark" style={{height: '60px'}} >
                <Container >
                    <Navbar.Brand href="#home" >
                        <img
                            alt=""
                            src="/Image/logo FRC baruhdpi.png"
                            width="40"
                            height="35"
                            className="d-inline-block align-center "
                        /> {' '}
                        <span style={{fontSize: '30px', marginLeft: '20px'}} >F.R.C</span></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigasi;