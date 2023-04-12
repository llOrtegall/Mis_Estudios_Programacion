import React, { useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const  [edad, setEdad] = useState('');

    return (
        <div className='container-fluid'>
            <form className="form-group container">

                <input className='form-control mb-3'
                    placeholder='Introduce el nombre' type="text"
                    onChange={(e) => { setNombre(e.target.value) }} //recoger el valor del input y setearlo
                />
                <input className='form-control mb-3'
                    placeholder='Introduce la edad' type="text"
                    onChange={(e) => { setEdad(e.target.value) }}
                />

                <input className='btn btn-info btn-block mb-3 w-100'
                    type="submit" />

            </form>
        </div>
    )
}

export default Formulario 