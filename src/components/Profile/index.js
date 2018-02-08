import React from 'react';
import axios from 'axios';

import ProfileHeader from './ProfileHeader';
import './index.sass';
import * as common from '../../common';


class Profile extends React.Component {

	constructor(props){
		super();
		this.state = {
			account: {},
			loading: true			
		};
	}


	componentDidMount() {
	axios.get(`${common.get_url()}/accounts/0010E00000DxeEJQAZ`)
			.then(res => {
				console.log(res)
				this.setState({ account: res.data, loading: false });
			});
		}

	render(){
		return(
				<div className="Profile">
					<ProfileHeader user= {this.state.account}/>
				</div>
			);
	}
};

export default Profile;