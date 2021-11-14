import React from 'react';
import {  Navigate } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  if(Boolean(window.localStorage.getItem("auth"))){
    return children
  }
    return <Navigate to="/login" />
  }
  
export default PrivateRoute;