import React from 'react';
import './Card.css';
import { addToCart } from '../../../Redux/Action';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

const Card = (items) => {
    const dispatch = useDispatch();
    const handleOnAdd = () =>{
            dispatch(addToCart(items));
    }

    return (
        <div className="cardContainer">
            <div className="image"></div>
            <div className='lower-half'>
            <div className='left-section'>
                <div className="price">{items.item.item}</div>
                <div>{items.item.price}</div>
            </div>
            <Button onClick={handleOnAdd}>Add</Button>
            </div>
        </div>
    );
};

export default Card;
