import { Link, Outlet } from "react-router-dom"

export const Products = () => {
    return (
        <div>
            <input type="search" placeholder="Search Product" />
            <nav>
                <Link to='featured'>featured</Link>
                <Link to='new'>new</Link>
            </nav>
            <Outlet />
        </div>
    )

}