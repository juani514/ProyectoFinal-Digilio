import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import '@fontsource/black-han-sans';
import '@fontsource/do-hyeon';
import logoHeader from '../../img/structure.png';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';


function ItemListContainer( { titulo, texto } ) {

    const [products, setProducts] = useState([])
    const { categoria } = useParams()

   
    useEffect(() => {
       

        if(categoria){
            const prodsPorCat = query(collection(db, "productos"), where("categoria", "==", categoria))
            getDocs(prodsPorCat).then(snapshot => {
                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                    
                })
                setProducts(prods)
            })
        }else {
            const prodsRef = collection(db, "productos")
            getDocs(prodsRef).then(snapshot => {
                console.log("snap", snapshot)
                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                    
                })
                setProducts(prods)
                console.log(prods)
            })
        }


    }, [categoria])

    

    return (
        <div id='productos' className='container'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;