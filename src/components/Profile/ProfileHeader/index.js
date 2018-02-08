import React from 'react';
import './index.sass'

class ProfileHeader extends React.Component {

	render(){

		return(
				<div className="ProfileHeader">
                    <div className="ProfileHeaderSec">
                        <div className="UserName">
                            <strong>{this.props.user.name}</strong>
                        </div>
                        <div className="ImageChangeWrap">

                        </div>
                    </div>
				</div>
			);

	}

};

export default ProfileHeader;