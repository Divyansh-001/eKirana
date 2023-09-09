import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
const Payment = (props) => {
    const handleBackToCart = () => {
        props.handleBack();
    };

    return (
        <>
            <Typography>Payment Page</Typography>
            <Button onClick={handleBackToCart}>Cancel</Button>
        </>
    );
};

export default Payment;
