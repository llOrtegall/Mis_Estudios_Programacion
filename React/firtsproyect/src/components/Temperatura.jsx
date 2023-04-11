import React, { useState } from "react";

const Temperatura = () => {

    const [Temperatura, setTemperatura] = useState(19)
    const Subir = () => {
        setTemperatura(Temperatura + 1)
    }
    const Bajar = () => {
        setTemperatura(Temperatura -1)
    }

    return (
        <div>
            <h2>La Temperatura Es: {Temperatura}</h2>
            <p>
                {
                    Temperatura > 21 ? 'Hace calor' : 'Hace Fresquito'
                }
            </p>
            <button onClick={Subir}>Aumentar Temperatura</button>
            <button onClick={Bajar}>Reducir Temperatura</button>
        </div>
    )
}

export default Temperatura