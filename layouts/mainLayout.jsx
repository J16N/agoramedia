import React, { Component } from 'react'
import Meta from '../components/Meta'
import PageLoader from '../components/PageLoader'
import Menubar from '../components/Menubar'
import Footer from '../components/Footer'
import { Icon, Input, Divider } from 'antd'
import styles from '../styles/mainLayoutStyle'

const { Search } = Input;

export default class MainLayout extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);
		this.header = React.createRef();
		this.state = { height: 0 };
	}

	componentDidMount() {
		this._isMounted = true;

		if (this._isMounted)
			this.setState({height: this.header.current.offsetHeight});
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		return (
			<>
				<Meta title={ this.props.headerText } />

				<PageLoader />

				<div className="fade-on-load">
					<div ref={this.header} style={{"backgroundColor": "#e45722"}}>
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
				</div>
			</>
		)
	}
}