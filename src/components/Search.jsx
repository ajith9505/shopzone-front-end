import React, { useState } from 'react'

const Search = ({ products, setProducts }) => {
    const [query, setquerry] = useState('');
    const searchProducts = () => {
        console.log(query);
        
        const filtredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        console.log(filtredProducts);
        
        setProducts(filtredProducts)
    }
    return (
        <>
            <div className='flex justify-end mr-[5rem] pt-[2rem]'>
                <input onChange={(e)=> setquerry(e.target.value) } className='rounded-full py-2 px-4' type="text" />
                <button onClick={() => searchProducts()} className='py-1 px-2'>Search</button>
            </div>
        </>
    )
}

export default Search