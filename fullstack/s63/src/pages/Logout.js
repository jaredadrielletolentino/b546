import { Navigate } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';

export default function Logout() {

    // localStorage.clear();
    const {setUser, unsetUser} = useContext(UserContext);

    useEffect(() => {
        // to clear the localstorage
        unsetUser();

        setUser({
            id: null,
            isAdmin: null
        });
    })

    // Redirect back to login
    return (
        <Navigate to='/login' />
    )

}