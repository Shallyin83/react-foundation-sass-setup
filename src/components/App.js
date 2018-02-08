import React from 'react';
import { bindActionCreators } from 'redux';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/settings';
import '../styles/common.sass';

class App extends React.Component {

	componentWillMount() {
		this.props.changeBrand();
		 switch (this.props.location.query.client) {
			case 'contiki': {
            	require('../styles/brands/contiki.sass');
				break;
			}
			case 'trafalgar': {
				require('../styles/brands/trafalgar.sass');
				break;
			}
			case 'ubyu': {
				require('../styles/brands/ubyu.sass');
				break;
			}
			case 'insight_vacations': {
				require('../styles/brands/iv.sass');
				break;
			}
			default:
				return ''
			}
    }

	render(){
		return(
				<div className="grid-y" id="App">
					<div id="outer-container" style={{height: '100%'}}>

						<div className="cell cell-block-container">
							<Header />				
						</div>
						<div className="personal-contact-details-container">
							<div className="grid-x">
								<div className="cell grid-container">
								</div>
							</div>
						</div>
					</div>
    			</div>
			);
	}
};
function mapStateToProps(state){
	return{
		router : state.router,
	}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps,mapDispachToProps)(App);	