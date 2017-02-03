import React from 'react';
import { Link } from 'react-router'
import moment from 'moment';

const propTypes = {
	talk: React.PropTypes.shape({
        id: React.PropTypes.number,
		imageUrl: React.PropTypes.string,
		subject: React.PropTypes.string,
        speakerName: React.PropTypes.string,
        presentationDate: React.PropTypes.string
	})
};

const TalkCard = (props) => {
	return (
		<div className="col-md-4 col-sm-6 col-xs-12 mb30">
            <div className="product">
                <img src={props.talk.imageUrl} className="img-responsive img-rounded to-animate"/>
                <h4>{props.talk.subject}</h4>
                <p>{props.talk.speakerName}</p>
                <p>{moment(props.talk.presentationDate).format('L')}</p>
                <p><Link to={'/details/' + props.talk.id}>Details</Link></p>
            </div>
        </div>
	);
}

TalkCard.propTypes = propTypes;

export default TalkCard;