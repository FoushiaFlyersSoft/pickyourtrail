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
		color: '#f2f2f2 !important',
		fontSize: '15px !important',
	},
	head: {
		fontSize: '14px',
		fontWeight: '700',
	},
	locationicon: {
		color: 'green !important',
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
	daybyday: {
		fontSize: '15px',
		fontWeight: '700',
		color: 'gray',
	},
	daybyday1: {
		fontSize: '15px',
		fontWeight: '700',
		margin: '4% 0 ',
		color: 'gray',
	},
	linktext: {
		fontFamily: 'Source Sans Pro',

		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '24px',
		/* identical to box height, or 133% */

		letterSpacing: '-0.02em',

		color: '#1895B3',
	},
	linktext1: {
		fontFamily: 'Source Sans Pro',

		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '24px',
		/* identical to box height, or 133% */

		letterSpacing: '-0.02em',

		color: '#000',
	},
	desc: {
		fontFamily: 'Source Sans Pro',

		fontWeight: 'normal',

		fontSize: '16px',
		lineHeight: '20px',

		/* Green 06 */
		margin: '1% 0',
		color: '#444444',
	},
	drag: {
		fontFamily: 'Source Sans Pro',

		fontWeight: '600',
		fontSize: '16px',
		lineHeight: '20px',

		/* Green 06 */

		color: '#00B277',
		cursor: 'pointer',
	},
	add: {
		background: '#FFFFFF',
		/* Grey 01 */
		width: '100px',
		fontSize: '12px',
		color: '#e5e5e5',
		position: 'relative',
		top: '25px',
		left: '30px',
		border: '1px solid #E5E5E5',
		boxSizing: 'border-box',
		borderRadius: '32px',
	},
	arrowicon: {
		position: 'relative',
		top: '7px',
	},
	morning: {
		fontFamily: 'Source Sans Pro',

		fontWeight: '600',
		fontSize: '13px',
		lineHeight: '16px',
		display: 'flex',
		alignItems: 'center',
		textTransform: 'uppercase',

		/* Grey 08 */

		color: '#777777',
		padding: '0.5%',
		width: 'fit-content',
		background: 'rgba(111,111,111,0.1)',

		borderRadius: '100px',
	},

	vl: {
		borderLeft: '2px solid green',
		marginLeft: '1.5vh',

		height: '500px',
	},
	v2: {
		borderLeft: '2px solid green',
		marginLeft: '1.5vh',

		height: '300px',
	},
	btn: {
		background: '#32a852',
		color: '#fff',
		padding: '0 5%',
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		borderRadius: '6px',
		fontSize: '16px',
		border: 'none',
	},
	link: {
		fontFamily: 'Source Sans Pro',

		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '24px',
		/* identical to box height, or 133% */

		letterSpacing: '-0.02em',

		/* Grey 11 */

		color: '#444444',
	},
	link1: {
		fontFamily: 'Source Sans Pro',

		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '20px',
		/* identical to box height, or 133% */

		letterSpacing: '-0.02em',

		/* Grey 11 */
		textDecoration: 'underline',

		color: '#1895B3',
	},
}));
export { useStyles };
