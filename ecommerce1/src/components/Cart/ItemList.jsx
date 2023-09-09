import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../../Redux/Action';

const useStyles = makeStyles((theme) => ({
    cartItem: {
        display: 'flex',
        height: '2rem',
        gap: '0.4rem',
        padding: '3px',
        alignItems: 'center',
    },
    itemText: {
        flexGrow: 1,
    },
    addButton: {
        textTransform: 'none',
        marginBottom: '0.5rem',
    },
}));
const ItemList = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleDeleteFromStore = (item) =>{
      dispatch(removeFromCart(item));
    }
    const handleAddToStore = (item) =>{
      dispatch(addToCart(item));
    }
    return (
        <>
            <Typography
                variant="body2"
                style={{ color: '#171717', marginBottom: '5px' }}
            >
                You have {cartItems.length} items in your cart
            </Typography>
            {cartItems.map((item) => (
                <div className={classes.cartItem} key={item.id}>
                    <Typography className={classes.itemText}>
                        {item.item.item}
                    </Typography>
                    <div>
                        <IconButton onClick={()=>handleAddToStore(item)}>
                            <AddIcon  style={{ color: '#171717' }}/>
                        </IconButton>
                        <IconButton onClick={()=>handleDeleteFromStore(item)}>
                            <DeleteIcon  style={{ color: '#171717' }} />
                        </IconButton>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ItemList;
