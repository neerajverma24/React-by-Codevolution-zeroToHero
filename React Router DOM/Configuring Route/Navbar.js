// way 1 ========================================= check index.css at line  15-23 for this 
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//     return (
//         <>
//             <nav className="primary-nav">
//                 <Link to='/'>Home</Link>
//                 <Link to='/about'>About</Link>
//                 <Link to='/contact'>Contact</Link>
//                 <Link to='/products'>Product</Link>
//             </nav>
//         </>
//     )
// }



// // way 2 
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const isStyleNavbar = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return (
        <nav className="primary-nav">
            {/* the difference of using Navlink is that when we inspect home,about or contact we find that it will show its class is 'active */}
            <NavLink style={isStyleNavbar} to='/'>Home</NavLink>
            <NavLink style={isStyleNavbar} to='/about'>About</NavLink>
            <NavLink style={isStyleNavbar} to='/contact'>Contact</NavLink>
            <NavLink style={isStyleNavbar} to='/products'>Product</NavLink>
        </nav>
    )
}
