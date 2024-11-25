import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';


export const ItemDetail = ({ producto }) => {
    const [counter, setCounter] = useState(1)
    const [addedProduct, setAddedProduct] = useState({})
    const handleAdd = () => {
        if (counter < producto.stock) {
            setCounter(counter + 1);
        }
    };
    const hableRest = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    const handleAddToCart = () => {
        setAddedProduct({ ...producto, cantidad: counter })
    }
    useEffect(() => {
    }, [addedProduct]);

    return (
        <>
            {producto &&
                <>
                    <div style={{ marginTop: "3rem" }}>{producto.name}</div>
                    <div>Precio: ${producto.price}</div>
                    <div>Stock disponible: {producto.stock}</div>
                    <div>Categoría: {producto.category}</div>
                    <img src={producto.img} width="200" height="200" />
                    <div>cantidad: {counter}</div>
                    <Button label='-' callback={hableRest} />
                    <Button label='Agregar al carrito' callback={handleAddToCart} />
                    <Button label='+' callback={handleAdd} />
                    <div style={{ marginTop: '20px' }}>
                        <Link to="/" className="button-detail">Volver al inicio</Link>
                    </div>
                </>
            }
        </>
    )
}

export default ItemDetail