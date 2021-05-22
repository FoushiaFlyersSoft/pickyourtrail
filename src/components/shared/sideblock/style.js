import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	logoimg: {
		height: '30px',
		objectFit: 'cover',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headercontainer: {
		display: 'flex',
		position: 'sticky',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	price: {
		color: 'gray !important',
		fontSize: '15px !important',
	},
	head: {
		fontSize: '14px',
		fontWeight: '700',
	},
	list: {
		fontSize: '12px',
		color: 'gray',
	},
	checkicon: {
		fontSize: '12px',
		color: 'gray',
		position: 'relative',
		top: '3px',
		marginRight: '2%',
	},
	btn: {
		background: '#32a852',
		color: '#fff',
		padding: '0 2%',
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		borderRadius: '6px',
		fontSize: '16px',
		border: 'none',
	},
}));
export { useStyles };
