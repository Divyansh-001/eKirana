import React from 'react';
import './Card.css';
import { addToCart } from '../../Redux/Action';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

const Card = (items) => {
    const dispatch = useDispatch();
    const handleOnAdd = () => {
        dispatch(addToCart(items));
    };
    const cardStyle = {
        width: items.width || '22%',
        height: items.height || '40%',
    };
    return (
        <div className="cardContainer" style={cardStyle}>
            <div className="image"></div>
            <div className="lower-half">
                <div className="left-section">
                    <div className="price">{items.item.item}</div>
                    <div>{items.item.price}</div>
                </div>
                <Button onClick={handleOnAdd}>Add</Button>
            </div>
        </div>
    );
};

export default Card;
