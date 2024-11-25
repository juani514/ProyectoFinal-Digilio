// import golden from '../../assets/golden.jpg';
// import honey from './src/assets/Mock/honey.jpg'

const products = [
    {
        id: '1',
        name: 'Golden',
        price: 1500,
        category: 'rubias',
        // img: golden,
        stock: 100,
        description: 'Muy rica'
    },
    {
        id: '2',
        name: 'Honey',
        price: 3000,
        category: 'rubias',
        // img: honey,
        stock: 100,
        description: 'Muy refrescante'
    },
    {
        id: '3',
        name: 'Scotish',
        price: 3500,
        category: 'rojas',
        // img: ,
        stock: 100,
        description: 'Roja suave'
    },
    {
        id: '4',
        name: 'Amber',
        price: 2000,
        category: 'rojas',
        // img: ,
        stock: 100,
        description: 'Roja intensa'
    },
    {
        id: '5',
        name: 'Stout',
        price: 2500,
        category: 'negras',
        // img: ,
        stock: 100,
        description: 'Amarga dulce'
    },
    {
        id: '6',
        name: 'Noire',
        price: 3000,
        category: 'negras',
        // img: ,
        stock: 100,
        description: 'Amarga'
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 1000)
    })
}