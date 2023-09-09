import React from 'react';
import './Home.css';
import AccessComponent from '../Miscllaneous/DialogBox/AllowAccessComponent';
import ScrollComponent from '../ScrollComponent/ScrollComponent';
import { Typography } from '@material-ui/core';
const Home = () => {
    return (
        <div className='home'>
                <Typography variant='h4'>Electricity</Typography>
                <ScrollComponent />
                <Typography variant='h4'>Veggies</Typography>
                <ScrollComponent />
                <Typography variant='h4'>Groceries</Typography>
                <ScrollComponent />
                <Typography variant='h4'>Medicines</Typography>
                <ScrollComponent />
            <AccessComponent />
        </div>
    );
};

export default Home;
