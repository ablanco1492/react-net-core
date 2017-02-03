import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const propTypes ={
};



export default class DetailsTalksPage extends React.PureComponent {
	componentWillMount() {
		this.props.fetchTalk(this.props.params.id);
	}
	onDelete(){
		const redirect = () => {
			this.props.router.push('/')
		}
		this.props.deleteTalk(this.props.params.id, redirect.bind(this));
	}
	render(){
		return (
			<div className="container">
				<div className="row mb30">
					<div className="col-md-12">
						<h1>{this.props.talk.subject}</h1>
						<h3> Presented by:</h3>
						<h3>{this.props.talk.speakerName}</h3>
						<div>
							<img src={this.props.talk.imageUrl} className="align-left img-responsive"/>
							<p><h4>Summary:</h4> {this.props.talk.summary} </p>
						</div>

						<p><h4>Presentation Date:</h4>{moment(this.props.talk.presentationDate).format('L')}</p>
						<p><button className="btn btn-danger" onClick={this.onDelete.bind(this)}>Delete</button></p>
						<p><Link to={"/edit/" + this.props.params.id } className="btn btn-warning">Edit</Link></p>

					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div><Link to="/" className="btn btn-primary" >Back to Home</Link></div>
					</div>
				</div>
			</div>
		);
	}
}

DetailsTalksPage.propTypes = propTypes;
