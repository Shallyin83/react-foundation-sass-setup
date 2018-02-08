import React from 'react';
import BurgerMenu from 'react-burger-menu';
import MenuWrap from '../MenuWrap';
import { connect } from 'react-redux';

class Menu extends React.Component {

	getItems(activeBrand) {

		if(activeBrand) {
		var brand = this.props.settings[activeBrand].brand

			let items =[
				<li className="menuItem" key="0"><a key="0" href=""><i className="fa fa fa-user" /><span>MY PROFILE</span></a></li>,
				<li className="menuItem" key="1"><a key="1" href=""><i className="fa fa-map-marker" /><span>MY TRIPS</span></a></li>,
				<li className="menuItem" key="2"><a key="2" href={brand.homepageUrl}><i className="fa fa-home" /><span>RETURN TO {brand.fullName}.COM</span></a></li>,
 				<li className="menuItem" key="3"><a key="3" href={brand.contactUrl} target="_blank"><i className="fa fa-fw fa-comment-o" /><span>CONTACT US</span></a></li>,
				<li className="menuItem" key="4"><a key="4" href=""><i className="fa fa-sign-out" /><span>LOGOUT</span></a></li>,
				];
   			 return items;
		}
	
  		};


	render(){
		const Menu = BurgerMenu['slide'];
		if (this.props.settings[this.props.settings.activeBrand] !== undefined) {
			var activeBrand = this.props.settings.activeBrand
			console.log(typeof activeBrand);
		} 
		return(
				<MenuWrap wait={20} side='right'>
					<Menu id='slide' pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
						<ul>
							{activeBrand !== undefined ? this.getItems(activeBrand) : ''}
						</ul>
						<ul className="side-menu-bottom-links">   
							<li>  <a>   Terms and Conditions     </a>   </li>
                        	<li>  <a>   Privacy Policy     </a>   </li>
                    	</ul>
					</Menu>
        		</MenuWrap>
			);
	}
};


function mapStateToProps(state){
	return{
		settings : state.settings,
	}
}


export default connect(mapStateToProps)(Menu);	