import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Navbar } from './Navbar'
import { OrderSummary } from './OrderSummary'
import { NoMatch } from './NoMatch'
import { Products } from './Products'
import { FeaturedProducts } from './FeaturedProducts'
import { NewProducts } from './NewProducts'
import { Users } from './Users'
import { UserDetails } from './UserDetails'
import { Admin } from './Admin'


function MainPage() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='order-summary' element={<OrderSummary />}></Route>

                <Route path='products' element={<Products />}>
                    {/* <Route index element={<FeaturedProducts />} />     by uncommenting see the url remains the same as two below */}
                    <Route path='featured' element={<FeaturedProducts />} />
                    <Route path='new' element={<NewProducts />} />
                </Route>

                <Route path='users' element={<Users />}>
                    <Route path=':userId' element={<UserDetails />} />
                    {/* userId can also be a string, not just a number */}
                    <Route path='admin' element={<Admin />} />
                </Route>

                <Route path='*' element={<NoMatch />} />

            </Routes>

        </div>
    )
}

export default MainPage
