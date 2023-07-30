// Home.js
import React from 'react';
import './Home.css';
import Card from './Card/Card';
import {listOfItems} from './DummyListOfItems';
import AccessComponent from '../Home/AllowAccessComponent';
const Home = () => {
    return (
        <>
        <div className="home-container">
            {listOfItems.map((item) => (
                <Card item={item} />
            ))}
        </div>
        <AccessComponent/>
        </>
    );
};

export default Home;
