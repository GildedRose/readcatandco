import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../utils/queries';
// import Auth from '../utils/auth';

const Profile = props => {

    const { email: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { email: userParam }
    });

    const user = data?.me || data?.user || {};

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
        </div>
    )
};

export default Profile;