import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
	render() {
		return(
			<div className='footer'>
				<footer
				style={
					{
						color: 'white',
						fontSize: '1rem'
					}
				}
				>
					© 2019. AGORA Media, Inc. All Rights Reserved.
				</footer>
			</div>
		)
	}
}

export default Footer;