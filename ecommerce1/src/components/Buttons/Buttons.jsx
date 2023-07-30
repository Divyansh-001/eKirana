import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles((theme) => ({
  buttonPrimary: {
    background: '#444654 !important',
    color: '#FFFFFF !important',
    padding: `${theme.typography.pxToRem(1)} 0`,
    borderRadius: theme.typography.pxToRem(4),
    fontSize: theme.typography.pxToRem(10),
    textTransform: 'none !important',
    height: theme.typography.pxToRem(32),
  },
  buttonLong:{
    background: '#13AA52 !important',
    color: 'white !important',
    padding: `${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(6)}`,
    borderRadius: theme.typography.pxToRem(4),
    fontSize: theme.typography.pxToRem(10),
    textTransform: 'none !important',
    height: theme.typography.pxToRem(32),
  }
}));

export default myStyles;
