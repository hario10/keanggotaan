import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from './Navigasi';
import Tabel from './Tabel';
import Formulir from './Formulir';

export default class DataAnggotaFRC extends React.Component {
    state = {
        anggota: [],
        id: '',
        nama: '',
        alasanGabung: '',
        email: '',
        noHandphone: '+' + 62 + ' '

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {
            this.setState({
                anggota: [
                    ...this.state.anggota,
                    {
                        id: this.state.anggota.length + 1,
                        nama: this.state.nama,
                        alasanGabung: this.state.alasanGabung,
                        email: this.state.email,
                        noHandphone: this.state.noHandphone
                    }
                ]
            })
        } else {
            const editSelainFormData = this.state.anggota
                .filter((anggota) => anggota.id !== this.state.id)
                .map((filterAnggota) => {
                    return filterAnggota
                })
                this.setState({
                    anggota: [
                        ...editSelainFormData,
                        {
                            id: this.state.anggota.length + 1,
                            nama: this.state.nama,
                            alasanGabung: this.state.alasanGabung,
                            email: this.state.email,
                            noHandphone: this.state.noHandphone
                        }
                    ]
                })
        }

        this.setState({
            id: '',
            nama: '',
            alasanGabung: '',
            email: '',
            noHandphone: '+' + 62 + ' '

        })

    }

    editData = (id) => {
        const editFormData = this.state.anggota
            .filter((anggota) => anggota.id === id)
            .map((filterAnggota) => {
                return filterAnggota
            })

        this.setState({
            id: editFormData[0].id,
            nama: editFormData[0].nama,
            alasanGabung: editFormData[0].alasanGabung,
            email: editFormData[0].email,
            noHandphone: editFormData[0].noHandphone
        })
    }
    render() {
        return (
            <div>
                <Navigasi />
                <div className="container mt-5">
                    <h2 style={{ textDecoration: 'underline' }}>DATA ANGGOTA</h2>
                    <Tabel anggota={this.state.anggota} editData={this.editData}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}