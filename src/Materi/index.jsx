import React from 'react';
import Data from './Data/Data';
import Label from './Label/Label';

export default class Materi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nama: 'Hario Soedirman',
            jodoh: 'Syilvia Aydhina',
            tanggalNikah: '20 Oktober 2022'
        }
    }

    gantiNama = (namaBaru) => {
        this.setState({
            nama: namaBaru
        })
    }

    gantiJodoh = (jodohBaru) => {
        this.setState({
            jodoh: jodohBaru
        })
    }

    gantiTanggal = (tanggalBaru) => {
        this.setState({
            tanggalNikah: tanggalBaru
        })
    }
    render () {
        return (
            <div>
                <Data nama = {this.state.nama} jodoh = {this.state.jodoh} tanggalNikah = {this.state.tanggalNikah}/>
                <Label gantiNama = {this.gantiNama} gantiJodoh = {this.gantiJodoh} gantiTanggal
                 = {this.gantiTanggal}/>
            </div>
        )
    }
}