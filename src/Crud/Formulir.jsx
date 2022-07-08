import React from 'react';
import { Form, Button, Col, Row, FloatingLabel } from 'react-bootstrap';

const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
    return (

        <div className="container mt-5">
            <Row>
                <Col>
                    <h2>{id ? "Edit Data" : "Tambah Data"}</h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={e => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontWeight: 'bold'}}>Nama Makanan</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nama"
                                value={nama}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontWeight: 'bold'}}>Deskripsi</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                type="textarea"
                                placeholder="Leave a comment here"
                                name="deskripsi"
                                value={deskripsi}
                                onChange={(e) => handleChange(e)}
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontWeight: 'bold'}}>Harga</Form.Label>
                            <Form.Control 
                                type="text"
                                name="harga" 
                                value={harga}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3" >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>

    )
}
export default Formulir;