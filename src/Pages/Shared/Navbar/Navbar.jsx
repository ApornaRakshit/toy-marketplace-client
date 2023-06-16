import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCarAlt, FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys">All toys</Link></li>
        <li><Link to="/myToys">My toys</Link></li>
        <li><Link to="/addToys">Add a toy</Link></li>
        <li>
            <Link to="/">
                <button>
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        <li><Link to="/blogs">Blogs</Link></li>


    </React.Fragment>
    return (
        <>
            <div className="navbar fixed z-10 bg-accent text-white text-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-link lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-teal-600">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/"><div className="text-white text-xl p-2 flex"><FaCarAlt></FaCarAlt>Toy Mart</div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                {
                    user ? <>
                        <button onClick={handleLogOut} className="w-25 h-25 ">Logout</button>
                    </> : <>
                        <li><Link to="/login">Login</Link></li>
                    </>
                }
            </div>
        </>
    );
};

export default Navbar;


<div className="avatar online placeholder">
    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span className="text-xl"></span>
    </div>
</div>