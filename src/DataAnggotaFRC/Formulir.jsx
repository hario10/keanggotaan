import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const Formulir = ({nama, alasanGabung, email, noHandphone, handleChange, handleSubmit, id}) => {
    return (
        <div>
            <div className="container mt-5">
                <Row>
                    <Col>
                        <h2>{id ? "Edit Data" : "Tambah Anggota"}</h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={event => handleSubmit(event)}>
                            {/* Input calon nama anggota */}
                            <Form.Group className="mb-3" >
                                <Form.Label style={{fontWeight: 'bold'}}>Nama :</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Masukkan nama yang valid"
                                    name= "nama"
                                    value={nama}
                                    onChange={event => handleChange(event)}
                                    
                                />
                            </Form.Group>

                            {/* Input alasan gabung calon angggota */}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{fontWeight: 'bold'}}>Alasan bergabung :</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name= "alasanGabung"
                                    value={alasanGabung}
                                    onChange={event => handleChange(event)}
                                    rows={3}
                                    
                                />
                            </Form.Group>

                            {/* Input email calon anggota */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontWeight: 'bold'}}>E-mail :</Form.Label>
                                <Form.Control
                                    type="e-mail"
                                    placeholder="Masukkan email kamu yang aktif"
                                    name= "email"
                                    value={email}
                                    onChange={event => handleChange(event)}
                                />
                            </Form.Group>

                            {/* Input nomor hp calon anggota */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontWeight: 'bold'}}>No. handphone :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name= "noHandphone"
                                    value={noHandphone}
                                    onChange={event => handleChange(event)}
                                />
                            </Form.Group>

                            {/* tombol submit */}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Formulir;