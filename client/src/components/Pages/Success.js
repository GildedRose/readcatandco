import React from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import { ADD_ORDER } from '../../utils/mutations'
// import { idbPromise } from "../../utils/indexedDB";

function Success() {

    return(
        <div>
            <br />
            <h1>Your order was successfully placed!</h1>
            <br />
            <h2>Thank you for supporting local and small businesses <br />within the San Antonio, TX area.</h2>
            <br />
            <h4>Please allow 3 to 4 business days for order processing.</h4>
            <br />
            <h5>You will now be redirected to the homepage.</h5>
            <p>If redirect does not occur, please proceed <a href="/">here</a>.</p>
        </div>
    )
};

export default Success;