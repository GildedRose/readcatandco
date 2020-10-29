import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from '../../utils/mutations'
import { idbPromise } from "../../utils/indexedDB";

function Success() {

    return(
        <div>
            <h1>Success!</h1>
            <h2>Thank you so much for your purchase</h2>
            <h2>You will now be redirected to the homepage</h2>
        </div>
    )
};

export default Success;