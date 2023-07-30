import React, { useState } from 'react';
import './AcessComponent.css';
import useStyles from '../Buttons/Buttons';
import Button from '@material-ui/core/Button';
const AccessComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const classes = useStyles();
    const handleCancel = () => {
        setIsOpen(false);
    };

    return  (
        <>
            {isOpen && (
                <div className="modal">
                    <div className='modalContainer'>
                        <span className='spanElement'>We would be needing your location access to Proceed.</span>
                        <div className="lowerHalf">
                            <Button className={classes.buttonPrimary} onClick={handleCancel}>ok</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccessComponent;
