import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Address from '../Address';
import Home from '../Home';
import LoginErrorPage from './LoginErrorPage';

const AddressRoute = () => {

    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <Address /> : <LoginErrorPage />;

}

export default AddressRoute;