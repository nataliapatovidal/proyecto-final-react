import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link } from 'react-router-dom'

const NavBar = ({ cartCount }) => { 
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
            <CartWidget cartCount={cartCount}/>
        </nav>        
    )

}
export default NavBar
