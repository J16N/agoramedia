import React, {Component} from 'react';
import Menubar from '../Menubar/Menubar';
import Header from '../Header/Header';
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

class Agoramedia extends Component {
	render () {
		return (
			<>
				<Menubar />
				<Header />
				<Content />
				<Footer />
			</>
		)
	}
}

export default Agoramedia;