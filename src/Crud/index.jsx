import React from 'react';
import NavbarComponent from './NavbarComponent';
import Data from './Data';
import Formulir from './Formulir';


export default class Crud extends React.Component {
    state = {
        jajanan: [],
        nama: '',
        deskripsi: '',
        harga: 0,
        id: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.id === '') {
            this.setState({
                jajanan: [
                    ...this.state.jajanan,
                    {
                        id: this.state.jajanan.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })
        } else {
            const makananSelainYangDiganti = this.state.jajanan
                .filter((jajanan) => jajanan.id !== this.state.id)
                .map((filterJajanan) => {
                    return filterJajanan
                })
                this.setState({
                    jajanan: [
                        ... makananSelainYangDiganti,
                        {
                            id: this.state.jajanan.length + 1,
                            nama: this.state.nama,
                            deskripsi: this.state.deskripsi,
                            harga: this.state.harga
                        }
                    ]
                })
        }

        this.setState({
            nama: '',
            deskripsi: '',
            harga: 0,
            id: ''
        })
    }

    editData = (id) => {
        const makananYangDiganti = this.state.jajanan
            .filter((jajanan) => jajanan.id === id)
            .map((filterJajanan) => {
                return filterJajanan
            })

        this.setState({
            nama: makananYangDiganti[0].nama,
            deskripsi: makananYangDiganti[0].deskripsi,
            harga: makananYangDiganti[0].harga,
            id: makananYangDiganti[0].id
        })
    }
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-3">
                    <Data jajanan={this.state.jajanan} editData={this.editData} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>

            </div>
        )
    }
}