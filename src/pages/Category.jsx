import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'



const Category = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prod)
    const {id} = useParams()

    const filteredProducts = products?.filter(product => product.category === id)

    console.log(filteredProducts)

    const handleChange=(e,page)=>{
        console.log(page)
        setPage(page)
    }

  return (
    <>
        <section className="py-40 text-center">
            <h1 className="text-4xl font-play text-black uppercase">{id}</h1>
        </section>

        <section className="w-full pb-10">
            <div className="px-24 grid grid-cols-3 gap-8">

        {filteredProducts?.map(product => (
            <Card key={product.id} product={product} />
        ))}
            </div>
        </section>
    </>
  )
}

export default Category