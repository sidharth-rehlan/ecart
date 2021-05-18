import React from 'react'
import {Link} from 'react-router-dom';
import classes from './Header.module.css'
import {Button} from '@material-ui/core';
import MiniCart from '../miniCart/MiniCart';


function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Logo</div>
            <div className={classes.loginMenu}>
                <Button variant="contained" color="primary">Login</Button>
                <MiniCart></MiniCart>
            </div>

            <nav className={classes.navigation}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
        </header>
    )
}

export default Header