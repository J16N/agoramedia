import React, { Component } from 'react';
import { Icon, Input, Divider } from 'antd';
import './Header.css'

const { Search } = Input;

class Header extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Reset The Router.</h1>
				<Divider />
				<Search placeholder="Search" size="large" />
			</div>
		)
	}
}

export default Header;