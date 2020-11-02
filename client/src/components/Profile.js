import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = props => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const { email: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { email: userParam }
    });


    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.email) {
        return (
            <h4>
                You need to be logged in to see this page. Either login or create an account.
            </h4>
        )
    }

    return (
        <div>
            <h2>
                {user.firstName}'s Account
            </h2>
            {user ? (
                <>
                    <h3 className="text-center">Order History</h3>
                    {user.orders.map((order) => (
                        <div key={order._id} className="my-2">
                            <h4><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> {new Date(parseInt(order.purchaseDate)).toLocaleDateString("en-US", options)}</h4>
                            <div className="flex-row">
                                {order.products.map(({ _id, name, image, price }, index) => (
                                    <div key={index} className="card px-1 py-1">
                                        <Link to={`/products/${_id}`}>
                                            <img
                                                alt={name}
                                                src={`/images/${image}`}
                                            />
                                            <p>{name}</p>
                                        </Link>
                                        <div>
                                            <span>${price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            ) : null}
        </div>
    )
};

export default Profile;