import React from 'react';
import AppHeader from '../../components/app-header/AppHeader.container';


export default props => {
	return (
		<div>
			<AppHeader />
			<div className="body-content">
				<div className="page-heading">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<h1 className="page-heading-lead">
									Power Hour Talks
									<span className="border"></span>
								</h1>
							</div>
						</div>
					</div>
				</div>
				{props.children}
			</div>
		</div>
	);
}