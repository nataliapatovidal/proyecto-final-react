import React, { useContext } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const NavBar = () => { 
    const { totalQuantity } = useContext(CartContext);

    return (
        <nav className='NavBar'>
            <Link to="/">
                <h3>E-Commerce</h3>
            </Link>
            <div className='Categories'>
            <NavLink to={`/category/celular`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
            <NavLink to={`/category/tablet`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
            <NavLink to={`/category/Notebook`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
            </div>
            <CartWidget cartCount={totalQuantity} /> 
        </nav>        
    );
}

export default NavBar;
