import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/indexedDB';

const Cart = () => {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ 
                type: ADD_MULTIPLE_TO_CART, 
                products: [...cart] 
            });
        };

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });

        return sum.toFixed(2);
    }

   {/* if (!state.cartOpen) {
        return (
            <div onClick={toggleCart}>
                <button>
                    Your Cart
                </button>
            </div>
        );
    } */}

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {state.cart.length ? (
                <div>
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div>
                        Total: ${calculateTotal()}
                        {
                            Auth.loggedIn() ?
                                <button>
                                    Checkout
                                </button>
                                :
                                <span>(log in to check out)</span>
                        }
                    </div>
                </div>
            ) : (<h3>Empty</h3>)}
        </div>
    );
};

export default Cart;