import React from 'react';
import { Link } from 'react-router';
import Form from '../../../components/form/Form.container';
import TextInput from '../../../components/form/text-input/TextInput.container';

const propTypes ={
};

const FormID = 'createTalkForm'; 

export default class CreateTalksPage extends React.PureComponent {
	onFormSubmit(){
		const redirect = () => {
			this.props.router.push('/')
		}
		const data = {
			"imageUrl": this.props.textInputs[FormID].imageUrl.value ,
			"presentationDate": this.props.textInputs[FormID].presentationDate.value,
			"speakerName": this.props.textInputs[FormID].speakerName.value,
			"subject": this.props.textInputs[FormID].subject.value,
			"summary": this.props.textInputs[FormID].summary.value
		};
		this.props.createTalk(data, redirect);
	}
	render(){
		return (
			<div className="container">
				<div className="row">
					<Form id={FormID}>
						<div className="col-md-12">
							<TextInput
								id="subject"
								formId={FormID}
								label="Subject"
								name="Subject"
								type="text"
								required={true}
								errorMessage="The name is required."
							/>
						</div>
						<div className="col-md-12">
							<TextInput
								id="speakerName"
								formId={FormID}
								label="Speaker Name"
								name="SpeakerName"
								type="text"
								required={true}
								errorMessage="The name is required."
							/>
						</div>
						<div className="col-md-12">
							<TextInput
								id="imageUrl"
								formId={FormID}
								label="Image URL"
								name="imageUrl"
								type="text"
								required={true}
								errorMessage="The name is required."
							/>
						</div>
						<div className="col-md-12">
							<TextInput
								id="summary"
								formId={FormID}
								label="Summary"
								name="Summary"
								type="text"
								required={true}
								errorMessage="The name is required."
							/>
						</div>
						<div className="col-md-12">
							<TextInput
								id="presentationDate"
								formId={FormID}
								label="Presentation Date"
								name="PresentationDate"
								type="date"
								required={true}
								errorMessage="The name is required."
							/>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<input type="button" className="btn btn-primary " value="Send" onClick={this.onFormSubmit.bind(this)}/>
								<Link to="/" className="btn btn-outline">Back</Link>
							</div>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

CreateTalksPage.propTypes = propTypes;
