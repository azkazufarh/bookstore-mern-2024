import React from 'react'
import { getImgUrl } from '../../utils/getImgUrl'
import { useParams } from 'react-router-dom'
import { useFetchBookByIdQuery } from '../../redux/features/books/bookApi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { FiShoppingCart } from 'react-icons/fi'

const SingleBook = () => {
    const {id} = useParams()
    const {data, isLoading, isError} = useFetchBookByIdQuery(id)
    const book = data?.book;
    // console.log(useFetchBookByIdQuery(id))

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error happending to load book information</div>

  return (
    <div className='max-w-lg shadow-md p-5'>
        <h1 className="text-2xl font-bold mb-6">{book.title}</h1>
        <div className="">
            <div>
                <img src={`${getImgUrl(book.coverImg)}`} alt={book.title} className='mb-8' />
            </div>
            <div className="mb-5">
                <p className="text-gray-600 mb-5">{ book.description }</p>
                <p className="font-medium mb-5">
                    ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
                </p>
                <p className="text-gray-700 mb-2"><strong>Author :</strong> {book.author || 'Admin'}</p>
                <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SingleBook