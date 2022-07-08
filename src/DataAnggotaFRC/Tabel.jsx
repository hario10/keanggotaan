import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = ({anggota, editData}) => {
    return (
        <div>
            <Table striped bordered hover className='container mt-3'>
                <thead>
                    <tr style={{ textAlign: 'center' }} className='bg bg-warning'>
                        <th>No</th>
                        <th>Nama Anggota</th>
                        <th>Alasan Bergabung</th>
                        <th>E-mail</th>
                        <th>No Hp</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        anggota.map((data, angka) => {
                            return (
                                <tr style={{ textAlign: 'center' }} key={angka}>
                                        <td>{angka + 1}</td>
                                        <td>{data.nama}</td>
                                        <td>{data.alasanGabung}</td>
                                        <td>{data.email}</td>
                                        <td>{data.noHandphone}</td>
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

export default Tabel;