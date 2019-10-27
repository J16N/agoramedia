import React, { Component } from 'react';
import { Menu, Icon, Drawer, Button } from 'antd';
import './Menubar.css'


const AgoraMenu = () => {
	return (
		<Menu mode="horizontal" className="agora-menu" defaultSelectedKeys={["home"]}>
			<Menu.Item key="home">
				<a href="">Home</a>
			</Menu.Item>
			<Menu.Item key="identities">
				<a href="">Identities</a>
			</Menu.Item>
			<Menu.Item key="features">
				<a href="">Features</a>
			</Menu.Item>
			<Menu.Item key="stories">
				<a href="">Stories</a>
			</Menu.Item>
			<Menu.Item key="reviews">
				<a href="">Reviews</a>
			</Menu.Item>
			<Menu.Item key="resources">
				<a href="">Resources</a>
			</Menu.Item>
			<Menu.Item key="contributors">
				<a href="">Contribute</a>
			</Menu.Item>
			<Menu.Item key="contact">
				<a href="">Contact</a>
			</Menu.Item>
		</Menu>
	);
}


class Menubar extends Component {
	render() {
		return (
			<nav className="header">
				<div className="agora_logo">
					<a href="">
						<img src={require('../../images/agora-edited.png')} width="150" height="50" alt="AGORA" />
					</a>
				</div>
				<div className="agora-menu-lg">
					<AgoraMenu mode="horizontal" />
				</div>
			</nav>
		);
	}
}

export default Menubar;