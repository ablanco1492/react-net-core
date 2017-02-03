import { connect } from 'react-redux';
import AppHeader from './AppHeader.component'
import * as mobileMenu from './actions';

const mapState = store => {
	return {
		mobileMenu: store.menuMobile,
		routeName: store.routeName
	};
}

const mapDispatch = dispatch => {
	return {
		openMenuMobile: () => dispatch(mobileMenu.open()),
		closeMenuMobile: () => dispatch(mobileMenu.close()),
		toggleMenuMobile: flag => dispatch(mobileMenu.toggle(flag))
	}
}

export default connect(mapState, mapDispatch)(AppHeader)