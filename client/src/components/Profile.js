import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import OrderHistory from './Pages/OrderHistory';

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
            <OrderHistory />
        </div>
    )
};

export default Profile;