import React, { Component } from 'react'
import Meta from '../components/Meta'
import NextNProgress from '../components/NextNProgress'
import Menubar from '../components/Menubar'
import Footer from '../components/Footer'
import { Icon, Input, Divider } from 'antd'
import styles from '../styles/mainLayoutStyle'

const { Search } = Input;

export default class MainLayout extends Component {
	constructor(props) {
		super(props);
		this.header = React.createRef();
		this.state = { height: 0 };
	}

	componentDidMount() {
		const offsetHeight = this.header.current.offsetHeight;
		this.setState({height: offsetHeight});
	}

	render() {
		return (
			<>
				<Meta title={ this.props.headerText } />

				<div ref={this.header} style={{"backgroundColor": "#e45722"}}>
					<NextNProgress />
					<Menubar height={this.state.height} />
					
					<div className="jumbotron">
						<h1>{ this.props.headerText }</h1>
						<Divider />
						<Search placeholder="Search" size="large" />

						<style jsx>{styles}</style>
					</div>
				</div>

				{ this.props.children }

				<Footer />
			</>
		)
	}
}