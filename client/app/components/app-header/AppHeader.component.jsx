import React from 'react';
import { AppBar, IconButton, FlatButton, Drawer } from 'material-ui';
import { Link } from 'react-router';


const propTypes = {
	mobileMenu: React.PropTypes.object.isRequired,
	openMenuMobile: React.PropTypes.func.isRequired,
	closeMenuMobile: React.PropTypes.func.isRequired,
	toggleMenuMobile: React.PropTypes.func.isRequired,
};

const AppHeader = (props) => {
	return (
		<header className="mainHeader">  
			<div className="navbar navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						
						<a href="#" className="nav-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-controls="navbar"><i></i></a>
						<a className="navbar-brand">Power Hour Talks</a>
					</div>
					<div className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

AppHeader.propTypes = propTypes;

export default AppHeader;