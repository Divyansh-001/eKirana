import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import EmptyCartPng from './EmptyCart.png';
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emptyCartImage: {
        background: `url(${EmptyCartPng}) no-repeat center`,
        backgroundSize: 'contain',
        height: '19rem',
        mixBlendMode: 'hard-light',
    },
    couponDesign: {
        height: '2rem',
        border: '1px solid #13AA52',
        borderRadius: '8px',
        padding: '8px 8px 8px 12px',
        marginTop: '6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

const Cost = (props) => {
    const cartItems = useSelector((state) => state.cartItems);
    const classes = useStyles();

    const totalPrice = cartItems.reduce(
        (price, item) => Number(item.item.price.slice(2).trim()) + price,
        0
    );

    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        if (props.couponCode !== '') {
            const calculatedDiscount =
                (totalPrice + 14 + 12) *
                (Number(props.couponCode.slice(3)) / 100);
            setDiscount(calculatedDiscount);
        } else setDiscount(0);
    }, [props.couponCode, totalPrice]);

    const handleRemoveCoupoun = () => {
        setDiscount(0);
        props.handleCouponChange('');
    };
    const priceArray = [
        { key: 'Cart Price', value: `Rs ${totalPrice}` },
        { key: 'Delivery Charge', value: 'Rs 40' },
        { key: 'GST', value: 'Rs 12' },
        { key: 'Discount Price', value: `Rs ${discount}` },
        {
            key: 'Total Price',
            value: `Rs ${totalPrice + 14 + 12 - discount}`,
        },
    ];

    return (
        <div className={classes.container}>
            {cartItems.length === 0 ? (
                <div className={classes.emptyCartContainer}>
                    <div className={classes.emptyCartImage} />
                </div>
            ) : (
                <>
                    <Typography
                        variant="body1"
                        style={{ color: '#171717', marginBottom: '9px' }}
                    >
                        Cost of Cart
                    </Typography>
                    {priceArray.map((item) => (
                        <div className={classes.cartItem} key={item.key}>
                            <Typography variant="body2">{item.key}</Typography>
                            <Typography variant="body2">
                                {item.value}
                            </Typography>
                        </div>
                    ))}
                    {discount !== 0 ? (
                        <div className={classes.couponDesign}>
                            <Typography>
                                <span style={{ fontWeight: '700' }}>
                                    '{props.couponCode}'
                                </span>{' '}
                                applied
                            </Typography>
                            {/* <Typography><span style={{fontWeight:'700'}}>Rs{discount}</span> saved</Typography>  */}
                            <Button
                                color="secondary"
                                onClick={handleRemoveCoupoun}
                            >
                                Remove
                            </Button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </>
            )}
        </div>
    );
};

export default Cost;
