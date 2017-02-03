import React from 'react';
import moment from 'moment';
import Form from '../../../components/form/Form.container';
import TextInput from '../../../components/form/text-input/TextInput.container';

const propTypes ={
};

const FormID = 'editTalkForm'; 

export default class EditTalksPage extends React.PureComponent {
	componentWillMount() {
		this.props.fetchTalk(this.props.params.id);
	}
	onFormSubmit(){
		const redirect = () => {
			this.props.router.goBack()
		}
		const data = {
			"id": this.props.params.id,
			"imageUrl": this.props.textInputs[FormID].imageUrl.value ,
			"presentationDate": this.props.textInputs[FormID].presentationDate.value,
			"speakerName": this.props.textInputs[FormID].speakerName.value,
			"subject": this.props.textInputs[FormID].subject.value,
			"summary": this.props.textInputs[FormID].summary.value
		};
		this.props.editTalk(data, redirect);
	}
	render(){
		console.log(this.props)
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
								value = {this.props.talk.subject}
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
								value = {this.props.talk.speakerName}
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
								value = {this.props.talk.imageUrl}
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
								value = {this.props.talk.summary}
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
								value = {moment(this.props.talk.presentationDate).format('YYYY-MM-DD')}
								required={true}
								errorMessage="The name is required."
							/>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<input type="button" className="btn btn-primary " value="Send" onClick={this.onFormSubmit.bind(this)}/>
								<input type="button" className="btn btn-outline  " value="Back" onClick={this.props.router.goBack}/>
							</div>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

EditTalksPage.propTypes = propTypes;
