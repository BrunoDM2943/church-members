import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
require('./menuMobile.css');

const ItemMenu = ({link,title, icon}) => {
	const linkInput = React.createRef();

	return(
		<div className="menu-mobile-item" onClick={(e) => {linkInput.current.handleClick(e);}}>
			<p><FontAwesomeIcon icon={icon} /></p>
			<Link to={link} ref={linkInput}>{title}</Link>
		</div>
	);
};

ItemMenu.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};


class MenuMobile extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					title:'Membros',
					icon:'users',
					link:'/membros',
					selected: false,
				},
				{
					title:'Relatório',
					icon:'book',
					link:'/relatorio',
					selected: false,
				}
			]
		};
	}

	render(){
		return(
			<div className="menu-mobile">
				{this.state.items.map((item) => {
					return (
						<ItemMenu key={item.link} title={item.title} icon={item.icon} link={item.link}/>
					);
				})} 
			</div>
		);
	}
}

export default MenuMobile;