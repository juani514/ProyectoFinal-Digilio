import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ message }) => {
  const [products, setProducts] = useState([])

  const { category } = useParams()

  useEffect(() => {
    category ?
      getProductsByCategory(category).then(response => {
        setProducts(response)
      }) :
      getProducts().then(response => {
        setProducts(response)
      })
  }, [category])

  return (
    <ItemList products={products} />
  )

}

export default ItemListContainer