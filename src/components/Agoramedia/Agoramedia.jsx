import React, {Component} from 'react';
import Menubar from '../Menubar/Menubar';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

class Agoramedia extends Component {
	render () {
		return (
			<>
				<div style={{"backgroundColor": "#e45722"}}>
					<Menubar />
					<Header title="Reset The Router." />
				</div>
				<Content />
				<Footer />
			</>
		)
	}
}

export default Agoramedia;