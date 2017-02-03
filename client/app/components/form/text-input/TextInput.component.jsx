import React from 'react';


const propTypes = {
	init: React.PropTypes.func.isRequired,
	destroy: React.PropTypes.func.isRequired,
	inputChange: React.PropTypes.func.isRequired,
	inputIsValid: React.PropTypes.func,
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	errorMessage: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	required: React.PropTypes.bool
};

const defaultProps = {
	value: ''
};


class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.init(this.formId, this.id, this.value);
	}

	componentWillUnmount() {
		this.props.destroy(this.id);
	}

	inputOnChange(event) {
		this.props.inputChange(event.target.value);
	}

	isValid(value) {
		let isValid = true;

		if (this.props.required && !value) {
			isValid = false;
		} else if (this.props.type === 'email') {
			isValid = this.validate.email(value);
		}

		return isValid;
	}
	render() {
		let value = this.props.input ? this.props.input.value : '';
		return (
			<div className="form-group">
				<label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
				<input type={this.props.type} htmlFor={this.props.name} className="form-control input-lg" onChange={this.inputOnChange.bind(this)} value = {value}/>
			</div>
		);
	}
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;