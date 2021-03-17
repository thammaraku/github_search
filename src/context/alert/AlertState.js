// initial state and all the actions to clean up app.js file

import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT,
} from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });

        // set time to alert to disappear after 5 seconds
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    };

    // Pass information to Provider
    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
            }}

        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;