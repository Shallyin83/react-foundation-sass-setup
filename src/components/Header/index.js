import React from 'react';
import Menu from '../Menu';

class Header extends React.Component {

	render(){
		return(
                
            <div className="grid-x header-container ">
                <div className="cell  small-12">
                    <div className="logo-container cell small-11">
                        <div className="company-logo logo"> </div>
                    </div>
                    <div className="side-menu-header-container cell small-1">
                        <span className="menu-text"><strong>MENU</strong></span>
                    </div>
                    <div className=" cell small-1">
                        <Menu />
                    </div>
                    
                </div>
            </div>

            	
                 
			);
	}
};

export default Header;