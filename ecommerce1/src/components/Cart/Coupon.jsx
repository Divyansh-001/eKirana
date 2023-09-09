import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    textField: {
        height: theme.typography.pxToRem(68),
        width: '100%',
        borderRadius: `${theme.typography.pxToRem(8)} !important`,
    },
    menuPaper: {
        marginTop: '-6px', // Adjust this value to move the menu up
    },
    label: {
        marginTop: theme.typography.pxToRem(6),
    },
}));

const Coupon = (props) => {
    const classes = useStyles();
    const options = ['EKR25', 'EKR50', 'EKR75'];
    const [selectValue, setSelectValue] = useState('');

    const handleChange = (event) => {
        setSelectValue(event.target.value);
        props.handleCouponChange(event.target.value);
    };

    return (
        <FormControl className={classes.textField}>
            <InputLabel className={classes.label} shrink={false}>
                {selectValue === '' ? 'Select an option' : selectValue}
            </InputLabel>
            <Select
                value={selectValue}
                name="couponSelect"
                className={classes.textField}
                onChange={handleChange}
                MenuProps={{
                    classes: { paper: classes.menuPaper },
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                }}
            >
                <MenuItem disabled value="">
                    Select from dropdown
                </MenuItem>
                {options.map((coupon) => (
                    <MenuItem key={coupon} value={coupon}>
                        {coupon}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Coupon;