import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        height: '100%',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    box:{
        height:'90%',
        width:'85%',
        borderRadius:'0.75rem',
        backgroundColor:'#FFFFFF',   
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }
}));

const EModal = (props) => {
    const classes = useStyles();
    return (
        <>
            <Modal className={classes.modal} open={props.open} onClose={props.onClose}>
                <Box className={classes.box}>
                    {props.children}
                </Box>
            </Modal>
        </>
    );
};

export default EModal;
