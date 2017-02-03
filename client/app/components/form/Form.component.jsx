import React from 'react';

const propTypes = {
	id: React.PropTypes.string.isRequired,
	content: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.element), React.PropTypes.element])
};


export default class Form extends React.PureComponent {
	componentWillMount(){
		this.props.formInit(this.props.id);
	}
	render(){
		return (
			<form id={this.props.id}>
				{this.props.children || this.props.content}
			</form>
		);
	}
}

Form.propTypes = propTypes;
