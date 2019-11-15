import React, { Component } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from "classnames"
import { Menu, Icon, Drawer, Button } from 'antd'
import styles from '../styles/menubarStyle'


const AgoraMenu = () => {
	const router = useRouter();

	return (
		<Menu mode="horizontal" className="agora-menu" defaultSelectedKeys={[(router.pathname).substr(1)]}>
			<Menu.Item key="identities">
				<Link href="">
					<a>Identities</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="features">
				<Link href="">
					<a>Features</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="stories">
				<Link href="">
					<a>Stories</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="reviews">
				<Link href="">
					<a>Reviews</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="resources">
				<Link href="">
					<a>Resources</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="contribute">
				<Link href="/contribute">
					<a>Contribute</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="contact">
				<Link href="">
					<a>Contact</a>
				</Link>
			</Menu.Item>
		</Menu>
	);
}


class Menubar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			documentLoaded: false,
			prevScrollpos: this.getScrollPercent,
			invisible: true,
			fixed: false
		};
	}

	handleScroll = () => {
		const {prevScrollpos} = this.state;
		const currentScrollPos = this.getScrollPercent();
		const invisible = prevScrollpos < currentScrollPos;
		const fixed = currentScrollPos > this.getHeaderHeightPercent();

		this.setState({
			prevScrollpos: currentScrollPos,
			invisible,
			fixed
		});
	}

	getScrollPercent = () => {
		if (this.state.documentLoaded) {
			var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
			/*h[st] and b[st] = number of pixels the content is scrolled vertically
				h[sh] and b[sh] = entire height and width of an element, including padding
				h.clientHeight = viewable height of an element in pixels, including padding, 
					but not the border, scrollbar or margin.
			*/
			return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
		}
	}

	getHeaderHeightPercent = () => {
		// this function is responsible to pop the menubar, after user
		// has scrolled upto certain height.
		if (this.state.documentLoaded) {
			var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
			return (this.props.height / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
		}
	}

	componentDidMount() {
		this.setState({documentLoaded:true});
		window.addEventListener('load', () => {this.setState({invisible: false})});
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	shouldComponentUpdate(nextState) {
		var {fixed, invisible} = this.state;
		if (fixed || !fixed) {
			if (invisible === nextState.invisible)
				return false
		}
		return true
	}

	render() {
		return (
			<nav className='header'
			onMouseEnter = {() => {this.setState({invisible: false})}}
			onMouseLeave = {() => {this.setState({invisible: true})}}
			>
				<div className="agora-logo">
					<Link href="/">
						<a><img src='/images/agora.svg' width="100" height="50" alt="AGORA" /></a>
					</Link>
				</div>
				<div className="agora-menu-lg">
					<AgoraMenu mode="horizontal" />
				</div>

				<style jsx>{styles}</style>

				{/*dynamic styles*/}
				<style jsx>{`
					.header {
						position: ${this.state.fixed ? 'fixed' : ''};
						top: ${this.state.invisible ? '-2.85' : '0'}rem;
					}
				`}</style>
			</nav>
		);
	}
}

export default Menubar;