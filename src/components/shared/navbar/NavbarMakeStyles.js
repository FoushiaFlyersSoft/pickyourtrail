import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	logoimg: {
		height: '30px',
		objectFit: 'cover',
	},

	headercontainer: {
		display: 'flex',

		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
}));
export { useStyles };
