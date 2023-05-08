import React from 'react'
import './Product.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import dressPic from '../../assets/gown1.jpg'

const Product = () => {
  return (
    <>
    <header className='--bg-dark'>
        <nav className='container'>
            <h2 className='--text-md --text-light --py2'>Masaka<span>Shop</span><AiOutlineShoppingCart color='orangered' size={30} /></h2>
        </nav>
    </header>
    <section>
        <div className="container product --flex-start --flex-dir-column">
            <div className="product-image --text-center --card --mr">
                <img src={dressPic} alt="" />
            </div>
            <div className="product-desc">
                <h3 className='--color-danger'>Sleek Wedding Gown</h3>
                <p className='--fw-bold'>$95 USD</p>
                <p className='--text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laborum facere tenetur omnis fuga est impedit, quia, aperiam non ex blanditiis. Dolorem officia labore excepturi voluptatem consectetur a maiores sit!</p>
                <form action="">
                    <div className="--form-control --flex-start --my2">
                        <label htmlFor="">Color</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                            <option value="">White</option>
                        </select>
                    </div>
                    <div className="--form-control --flex-start --my2">
                        <label htmlFor="">Size</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                            <option value="">M</option>
                        </select>
                    </div>
                    <div className="--form-control --flex-start --my2">
                        <label htmlFor="">Quantity</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                            <option value="">1</option>
                        </select>
                    </div>
                    <button className="--btn --btn-primary --btn-block">Add to Cart</button>
                </form>
            </div>
        </div>
    </section>

    </>
  )
}

export default Product