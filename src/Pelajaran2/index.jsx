import { useState } from "react";

const Pelajaran2 = () => {
    const [angka, setAngka] = useState(0)

    const tambahAngka = () => {
        setAngka (angka + 1)
    }

    const kurangiAngka = () => {
        if(angka > 0) {
            setAngka (angka - 1)
        }
    }

    return(
        <div>
            <button onClick={tambahAngka}>+</button>
            <span>{angka}</span>
            <button onClick={kurangiAngka}>-</button>
        </div>
    )
}
export default Pelajaran2;