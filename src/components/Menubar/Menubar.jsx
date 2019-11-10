import React, { Component } from 'react';
import classnames from "classnames";
import { Menu, Icon, Drawer, Button } from 'antd';
import './Menubar.css';


const AgoraMenu = () => {
	return (
		<Menu mode="horizontal" className="agora-menu" defaultSelectedKeys={[""]}>
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

const getScrollPercent = () => {
	var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
	/*h[st] and b[st] = number of pixels the content is scrolled vertically
		h[sh] and b[sh] = entire height and width of an element, including padding
		h.clientHeight = viewable height of an element in pixels, including padding, 
			but not the border, scrollbar or margin.
	*/
	return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}


class Menubar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			prevScrollpos: getScrollPercent(),
			invisible: true,
			fixed: false
		};
	}

	handleScroll = () => {
		const {prevScrollpos} = this.state;
		const currentScrollPos = getScrollPercent();
		const invisible = prevScrollpos < currentScrollPos;
		const device = window.screen.width > window.screen.height ? 10: 25;
		const fixed = currentScrollPos > device;

		this.setState({
			prevScrollpos: currentScrollPos,
			invisible,
			fixed
		});
	}

	componentDidMount() {
		window.addEventListener('load', () => {this.setState({invisible: false})});
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		return (
			<nav className = {
				classnames(
					"header",
					{
						"header-hidden": this.state.invisible
					},
					{
						"header-fixed": this.state.fixed
					}
				)
			}
			onMouseEnter = {() => {this.setState({invisible: false})}}
			onMouseLeave = {() => {this.setState({invisible: true})}}
			>
				<div className="agora_logo">
					<a href="">
						<img src={require('../../images/agora.svg')} width="100" height="50" alt="AGORA" />
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