import React from 'react'
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <AppBar position="static" className="mb-5">
                <nav className='navbar navbar-expand-lg'>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                    </Toolbar>
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item mr-4 text-white'>
                            <Link className='text-white text-decoration-none' to="/">Home</Link>
                        </li>
                        <li className='nav-item mr-4 text-white'>
                            <Link className='text-white text-decoration-none' to="/about">About</Link>
                        </li>
                        <li className='nav-item mr-4 text-white'>
                            <Link className='text-white text-decoration-none' to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </AppBar>
        )

    }
}