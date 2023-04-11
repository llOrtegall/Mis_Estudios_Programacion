import React, { Fragment, useState } from "react";

const Listado = () => {

    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <Fragment>
            <ul>
                {
                    numeros.map((item, index) =>
                        <li key={item}>
                            {item} - {index}
                        </li>
                    )
                }b
            </ul>
        </Fragment>
    )
}

export default Listado
