import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from "uuid";
import {Navigate } from "react-router-dom";

const Address = () => {
    const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <Navigate replace to={`/Editor/${uuid()}`} /> 
  )
  )
}

export default Address