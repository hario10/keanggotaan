import React from 'react';
import { Table } from 'react-bootstrap';

const Data = ({ jajanan, editData }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Makanan</th>
                        <th>Deskripsi</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jajanan.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.nama}</td>
                                    <td>{data.deskripsi}</td>
                                    <td>Rp. {data.harga}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => editData(data.id)}>Edit</button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }


                </tbody>
            </Table>
        </div>
    )

}
export default Data;