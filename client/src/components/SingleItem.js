import React from "react";
import { Link } from "react-router-dom";
//import './SingleItem.css;

// import { useStoreContext } from '../../utils/GlobalState';

function ProductItem(item) {
    const {
      image,
      name,
      _id,
      price,
      description,
      quantity
    } = item;
  
    // const [state, dispatch] = useStoreContext();
    // const { cart } = state;
  
    // const addToCart = () => {
    //   const itemInCart = cart.find((cartItem) => cartItem._id === _id);
  
    //   if (itemInCart) {
    //     dispatch({
    //       type: UPDATE_CART_QUANTITY,
    //       _id: _id,
    //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    //     });
    //     idbPromise('cart', 'put', {
    //       ...itemInCart,
    //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    //     });
    //   } else {
    //     dispatch({
    //       type: ADD_TO_CART,
    //       product: { ...item, purchaseQuantity: 1 }
    //     });
    //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    //   }
    // };
  
    return (
      <div>
      <div class="card mb-4 shadow-sm">
        <Link to={`/products/${_id}`}>
          <img
          class="card-img-top"
            alt={name}
            src={`/images/${image}`}
          />
          <div class="card-body">
          <h3 class="text-center">{name}</h3>
          </div>
        </Link>
        <div class="card body card text">
          <div>{description}</div>
          <div>{quantity} in stock</div>
          <span>${price}</span>
        </div>
        <button>Add to cart</button>
        </div>
      </div>
    );
  }
  
  export default ProductItem;