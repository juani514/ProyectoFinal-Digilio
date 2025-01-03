import './ItemList.css';
import React from "react";
import Item from '../Item/Item.jsx'


const ItemList = ({ products }) => {

    return(
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;    