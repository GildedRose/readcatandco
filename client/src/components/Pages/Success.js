import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from '../../utils/mutations'
import { idbPromise } from "../../utils/indexedDB";

function Success() {

    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map(item => item._id);

            if (products.length) {
                const { data } = await addOrder({ variables: { products } });
                const productData = data.addOrder.products;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            // setTimeout(() => {
            //     window.location.assign('/');
            // }, 3000);
        }

        saveOrder();
    }, [addOrder]);

    return (
        <div class="text-center">
            <h1><i class="far fa-check-circle"></i></h1>
            <h2>Thank you for your purchase</h2>
            <p>You will now be redirected to the homepage...</p>
        </div>
    )
};

export default Success;