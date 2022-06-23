import React from 'react';
import ProductItem from './components/ProductItem';
import { useState, useEffect } from 'react';

const ProductList = (props) => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("begin...........")
    const data = [
        {
            name: "Product 1",
            price: 100,
        },
        {
            name: "Product 2",
            price: 100,
        },
        {
            name: "Product 3",
            price: 100,
        },
        {
            name: "Product 4",
            price: 100,
        }
    ]

    useEffect(()=>{
        console.log("component did mount...........")

        getData();
    },[]) ; // component Didmount.
    
    const getData = () => {
        setProducts([...data]);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <div>
            <h1>Product List</h1>
            {loading!==true && products.map((item,index)=> (
                <ProductItem key={index} data={item}/>
            ))}
            <hr/>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
        </div>
    );
};

export default ProductList;

