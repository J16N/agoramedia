import React, { Component } from 'react'
import Router from "next/router"
import { Progress } from 'antd'
import styles from '../styles/pageLoaderStyle'

export default class PageLoader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			percent: 15,
			display: "none",
		}
	}

	routeChangeStart = url => {
		console.log(`Changing to: ${url}`);
		
		this.progress = setInterval(() => {
			var { percent } = this.state;
			
			if (percent > 80) {
				percent += ((Math.random() * 5) + 1);
			} else if (percent > 90) {
				percent += ((Math.random() * 3) + 1);
			} else if (percent > 95) {
				percent += (Math.random() + 1);
			} else {
				percent += ((Math.random() * 20) + 1);
			}

			this.setState({percent: percent, display: "inline-block"});
		}, (Math.random() * 5000) + 1000);
	}


	routeChangeEnd = url => {
		console.log(`Destination: ${url}`);
		clearInterval(this.progress);
		this.setState({percent: 100});
		//setTimeout(() => {this.setState({display: "none"})} , 6000)
	}


	render() {
		Router.events.on('routeChangeStart', this.routeChangeStart);
		Router.events.on('routeChangeComplete', this.routeChangeEnd);
		Router.events.on('routeChangeError', this.routeChangeEnd);

		return (
			<>
				<Progress
				percent={this.state.percent}
				status="active"
				strokeWidth={4}
				showInfo={false}
				strokeColor='#a8411c'
				/>

				<style jsx>{styles}</style>
				<style jsx>{`
					:global(.ant-progress) {
						display: ${this.state.display};
					}
				`}</style>
			</>
		)
	}
}