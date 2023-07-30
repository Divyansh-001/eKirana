import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from '@mui/material';
import AddToCart from '../Cart/AddtoCart';

const NavBar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = (e) => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">Home</Link>
            </div>
            <div className="navbar-right">
                <Link to="/login">
                    <LoginIcon
                        style={{ color: '#171717', margin: '-8px 8px' }}
                    />
                </Link>
                <IconButton onClick={handleModalOpen}>
                    <ShoppingCartIcon style={{ color: '#171717' }} />
                </IconButton>
                {isModalOpen && (
                    <AddToCart
                        modalState={isModalOpen}
                        handleClose={handleModalClose}
                    />
                )}
            </div>
        </nav>
    );
};

export default NavBar;
