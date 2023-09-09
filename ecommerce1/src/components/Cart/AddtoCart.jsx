import Button from '@mui/material/Button';
import EModal from './Modal';
import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import buttonPrimary from '../Buttons/Buttons';
import ItemList from './ItemList';
import Payment from './Payment';
import Cost from './Cost';
import Coupon from './Coupon';
import AddressComponent from './Adress';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: `${theme.typography.pxToRem(1)} !important`,
        padding: theme.typography.pxToRem(18),
        paddingTop: theme.typography.pxToRem(10),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px !important',
        borderRadius: `${theme.typography.pxToRem(10)} !important`,
    },
    paperSmall: {
        height: '5rem',
        maxHeight: '5rem',
    },
    paperLarge: {
        height: '23rem',
        maxHeight: '23rem',
    },
    footer: {
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

const AddToCart = (props) => {
    const classes = useStyles();
    const buttonClass = buttonPrimary();
    const [isModalClose, setModalClose] = useState(false);
    const [isPaymentOpen, setPaymentOpen] = useState(false);
    const [couponCode, setcouponCode] = useState('');
    const handleClose = () => {
        setModalClose(true);
        props.handleClose();
    };
    const handleOpenPayment = (props = false) => {
        setPaymentOpen(props);
    };
    const handleCouponChange = (value) =>{
        setcouponCode(value);
    };
    return (
        props.modalState && (
            <EModal
                open={props.modalState}
                onClose={isModalClose}
                className={classes.root}
            >
                {isPaymentOpen ? (
                    <Payment handleBack={handleOpenPayment}/>
                ) : (
                    <Grid className={classes.container} container spacing={3}>
                        <Grid item xs={6}>
                            <Paper
                                className={clsx(
                                    classes.paper,
                                    classes.paperLarge
                                )}
                            >
                                <ItemList />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper
                                className={clsx(
                                    classes.paper,
                                    classes.paperLarge
                                )}
                            >
                                <Cost 
                                handleCouponChange={handleCouponChange}
                                couponCode={couponCode}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper
                                className={clsx(
                                    classes.paper,
                                    classes.paperSmall
                                )}
                            >
                                AddressComponent
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper
                                className={clsx(
                                    classes.paper,
                                    classes.paperSmall
                                )}
                            >
                               <Coupon 
                               handleCouponChange = {handleCouponChange}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className={clsx(classes.footer)}>
                            <Button
                                className={buttonClass.buttonPrimary}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                className={buttonClass.buttonLong}
                                onClick={()=>handleOpenPayment(true)}
                            >
                                Proceed to Payment
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </EModal>
        )
    );
};

export default AddToCart;
