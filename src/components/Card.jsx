import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({product}) => {
  return (
    <Link  to={`/product/${product.id}`} className="card w-full hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[386px]">
                    <img src={JSON.stringify(import.meta.env.VITE_REACT_UPLOAD).replace(/"/g, '').replace('api','') +product?.attributes?.img?.data?.attributes?.url} alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">{product?.attributes?.title}</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R{product?.attributes?.price}</span>
                    <span className="text-xl font-bold text-green-300">{product?.attributes?.percent}% off</span>
                </div>
                </div>
    </Link>
  )
}

export default Card