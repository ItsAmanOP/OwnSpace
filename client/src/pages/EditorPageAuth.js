import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Home from '../Home';
import EditorPage from './EditorPage';

const EditorPageAuth = () => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <EditorPage /> : <Home />;
}

export default EditorPageAuth;