import { useParams, useNavigate } from 'react-router-dom'
import { addItem } from '../redux/slice'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import productStyle from './product.module.css'
import { useSelectorWrapper } from '../utils'
import { emptyImageUrl } from '../constants'

function ProductDetails ({ products }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelectorWrapper('cart')
  const [addedToCart, setAddedToCart] = useState(false)
  const { id } = useParams()

  const product = products
    ? products.find(
      product => `${product.id}` === id
    )
    : JSON.parse(localStorage.getItem('products')).find(
      product => `${product.id}` === id
    )

  function addToCart () {
    dispatch(addItem(product))
  }

  useEffect(() => {
    if (items.find(a => a.item.id === product.id)) {
      setAddedToCart(true)
    }
  }, [items, product])

  function goToCart () {
    navigate('/cart')
  }
  return (
    <div className={productStyle['product-page']}>
      <div className={productStyle['product-card']}>
        <div className={productStyle['product-image']}>
          <img
            src={product.image_url || emptyImageUrl}
            alt='product image'
            height='300'
            width='250'
          />
        </div>
        <div className={productStyle['product-details']}>
          <h2>{product.name}</h2>
          <p>Rs. {product.price}</p>{
            !addedToCart
              ? (
                <button
                  className={productStyle['product-cart-button']}
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
                )
              : (
                <button
                  className={productStyle['product-gotocart-button']}
                  onClick={goToCart}
                >
                  Go to Cart
                </button>
                )
          }

        </div>

      </div>
    </div>
  )
}

export default ProductDetails