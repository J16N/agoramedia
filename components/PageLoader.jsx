import React, { Component } from 'react'
import Router from "next/router"
import NProgress from 'nprogress'
import PropTypes from 'prop-types'

/* eslint-disable react/prefer-stateless-function */
class PageLoader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		}
	}

	static defaultProps = {
		color: '#29D',
		startPosition: 0.3,
		stopDelayMs: 200,
		height: 5,
	};

	timer = null;

	routeChangeStart = () => {
		NProgress.set(this.props.startPosition);
		this.setState({isLoading: true})
		NProgress.start();
	};

	routeChangeEnd = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			NProgress.done(true);
			this.setState({isLoading: false})
		}, this.props.stopDelayMs);
	};

	componentDidMount() {
		const { options } = this.props;

		if (options) {
			NProgress.configure(options);
		}

		Router.events.on('routeChangeStart', this.routeChangeStart);
		Router.events.on('routeChangeComplete', this.routeChangeEnd);
		Router.events.on('routeChangeError', this.routeChangeEnd);
	}

	render() {
		const { color, height } = this.props;

		return (
			<>
				<style jsx global>{`
					#nprogress {
						pointer-events: none;
					}

					#nprogress .bar {
						position: fixed;
						z-index: 1031;
						top: 0;
						left: 0;
						width: 100%;
						border-right-radius: 50px;
					}

					#nprogress .bar::after {
						content: '';
						opacity: 0;
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						background: #fff;
						border-right-radius: 50px;
						animation: animate-shine 1s ease-out infinite;
					}

					@keyframes animate-shine {
						0% {opacity: 0; width: 0;}
						50% {opacity: 0.5;}
						100% {opacity: 0; width: 100%;}
					}

					#nprogress .peg {
						display: block;
						position: absolute;
						right: 0px;
						width: 100px;
						height: 100%;
						opacity: 1;
						-webkit-transform: rotate(3deg) translate(0px, -4px);
						-ms-transform: rotate(3deg) translate(0px, -4px);
						transform: rotate(3deg) translate(0px, -4px);
					}

					#nprogress .spinner {
						display: "block";
						position: fixed;
						z-index: 1031;
						top: 15px;
						right: 15px;
					}

					#nprogress .spinner-icon {
						width: 18px;
						height: 18px;
						box-sizing: border-box;
						border: solid 2px transparent;
						border-radius: 50%;
						-webkit-animation: nprogresss-spinner 400ms linear infinite;
						animation: nprogress-spinner 400ms linear infinite;
					}

					.nprogress-custom-parent {
						overflow: hidden;
						position: relative;
					}

					.nprogress-custom-parent #nprogress .spinner,
					.nprogress-custom-parent #nprogress .bar {
						position: absolute;
					}

					@-webkit-keyframes nprogress-spinner {
						0% {
							-webkit-transform: rotate(0deg);
						}
						100% {
							-webkit-transform: rotate(360deg);
						}
					}
					
					@keyframes nprogress-spinner {
						0% {
							transform: rotate(0deg);
						}
						100% {
							transform: rotate(360deg);
						}
					}
				`}</style>
				
				<style jsx global>{`
					#nprogress .bar {
						background: ${color};
						height: ${height}px;
					}

					#nprogress .peg {
						box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
					}

					#nprogress .spinner-icon {
						border-top-color: ${color};
						border-left-color: ${color};
					}
				`}</style>
				
				<style jsx global>{`
					.fade-on-load {
						opacity: ${this.state.isLoading ? 0.5 : 1};
					}
				`}</style>
			</>
		)
	}
}

PageLoader.propTypes = {
	color: PropTypes.string,
	startPosition: PropTypes.number,
	stopDelayMs: PropTypes.number,
	options: PropTypes.object,
};

export default PageLoader;