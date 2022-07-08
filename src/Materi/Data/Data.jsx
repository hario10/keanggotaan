import React from 'react';

const Data = (props) => {
    return (
        <div>
            <span style={{fontWeight: 'bold'}}>Nama :</span>  {props.nama} 
            <br />
            <span style={{fontWeight: 'bold'}}>Jodoh :</span> {props.jodoh}
            <br />
            <span style={{fontWeight: 'bold'}}>Tanggal Nikah :</span> {props.tanggalNikah}
            <hr />
        </div>
    )
}

export default Data;