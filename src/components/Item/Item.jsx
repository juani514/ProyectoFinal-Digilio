import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../Item/Item.css'

const Item = ({ product }) => {
    return (
        <div className='item-container'>
            <h3>{product.name}</h3>
            <i>{product.description}</i>
            <img src={product.img} widht="400" height="200" />
            <Link to={`/producto/${product.id}`} className="link">Ver detalles</Link>
        </div>
    )
}
export default Item