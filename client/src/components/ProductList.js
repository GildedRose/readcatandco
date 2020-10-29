import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import SingleItem from './SingleItem';
import { QUERY_PRODUCTS } from '../utils/queries';

function ProductList() {

    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
        }
    }, [data, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter(product => product.category._id  === currentCategory);
    }


    return (
        <div className="my-2">
          <h2>Our Products:</h2>
          {state.products.length ? (
            <div className="row">
              <div className="col-md-4">
                {filterProducts().map(product => (
                    <SingleItem
                      key= {product._id}
                      _id={product._id}
                      image={product.image}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      quantity={product.quantity}
                    />
                ))}
            </div>
            </div>
          ) : (
            <h3>You haven't added any products yet!</h3>
          )}
        </div>
      );
};

export default ProductList;