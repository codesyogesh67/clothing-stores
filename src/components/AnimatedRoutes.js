import React from 'react'
import { Home, Cart, Payment, Products } from '../containers'
import PrivateRoute from './PrivateRoute'
import SignIn from '../containers/auth/SignIn'
import SignUp from '../containers/auth/SignUp'
import Product from './products/product/Product'
import Form from './header/components/Form'
import { Elements } from '@stripe/react-stripe-js'
import { selectUser } from '../features/auth/authSlice'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { AnimatePresence } from "framer-motion"


function AnimatedRoutes() {
    const user = useSelector(selectUser)
    const location = useLocation()

    const stripePromise = loadStripe(
        `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
    );
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />

                <Route path="/cart" element={
                    <PrivateRoute> <Cart /> </PrivateRoute>} />
                <Route path="/signin" element={!user ? <SignIn /> : <Home />} />
                <Route path="/signup" element={!user ? <SignUp /> : <Home />} />
                <Route path="/product/:handle" element={<Product />} />
                <Route path="/dashboard" element={<Form />} />

                <Route
                    path="/payment"
                    element={
                        <Elements stripe={stripePromise}>
                            <PrivateRoute>
                                <Payment />
                            </PrivateRoute>

                        </Elements>
                    }
                />
                <Route path="/category/:handle" element={<Products />} />
                <Route path="/category/:handle/:handle" element={<Products />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
