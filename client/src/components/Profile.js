import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = props => {

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
            <div className="container my-1">

                {user ? (
                    <>
                        <h2>Order History</h2>
                        {user.orders.map((order) => (
                            <div key={order._id} className="my-2">
                                <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                                {/* <Link to="/profile">
                                    ← Back to Profile
                                </Link> */}
                                <div className="flex-row">
                                    {order.products.map(({ _id, image, name, price }, index) => (
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
        </div >
    )
};

export default Profile;