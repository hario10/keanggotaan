import React from 'react';

const Label = (props) => {
    return (
        <div>
            <label>Ganti Nama: 
                <br />
                <input 
                    type="text" 
                    onBlur={(e) => props.gantiNama (e.target.value)}
                />
            </label>
            <br />
            <label>Ganti Jodoh: 
                <br />
                <input 
                    type="text" 
                    onBlur={(e) => props.gantiJodoh (e.target.value)}
                />
            </label>
            <br />
            <label>Ganti Tanggal Nikah: 
                <br />
                <input 
                    type="text" 
                    onBlur={(e) => props.gantiTanggal (e.target.value)}
                />
            </label>
        </div>
    )
}

export default Label;