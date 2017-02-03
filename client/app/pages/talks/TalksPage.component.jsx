import React from 'react';
import { Link } from 'react-router';
import TalkCard from './talk-card/TalkCard.component';

const propTypes = {
	talks: React.PropTypes.arrayOf(React.PropTypes.shape({
		
	})).isRequired,
	fetchTalks: React.PropTypes.func.isRequired
}
export default class TalksPage extends React.PureComponent {
    componentDidMount() {
		this.props.fetchTalks();
	}
	render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb30"><Link className="btn btn-primary" to="/create">Create talk</Link></div>
                </div>
                <div className="row">
                    {
                        this.props.talks.map((talk, id) => {
                            return(
                                <TalkCard key={id} talk={talk}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

TalksPage.propTypes = propTypes;