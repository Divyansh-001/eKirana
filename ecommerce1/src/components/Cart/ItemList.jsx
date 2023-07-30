import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cartItem: {
    display: 'flex',
    height: '2rem',
    gap: '0.4rem',
    padding: '3px',
    alignItems: 'center', // Align items vertically
  },
  itemText: {
    flexGrow: 1, // Take up all available space to push the button to the right
  },
  addButton: {
    textTransform: 'none',
    marginBottom: '0.5rem',
  },
}));

const ItemList = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const classes = useStyles();

  return (
    <>
      <Typography variant="body2" style={{ color: '#171717', marginBottom:'5px' }}>
        You have {cartItems.length} items in your cart
      </Typography>
      {cartItems.map((item) => (
        <div className={classes.cartItem} key={item.id}>
          <Typography className={classes.itemText}>{item.item.item}</Typography>
          <div>
            <Button className={classes.addButton}>Add</Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
