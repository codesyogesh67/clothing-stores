import React from 'react'
import { selectUser } from '../features/auth/authSlice'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const currentUser = useSelector(selectUser)
    return (
        currentUser ? children : <Navigate to="/signin" />



    )
}

export default PrivateRoute
