import React, { Component } from 'react'
import MainLayout from '../layouts/mainLayout'
import ContactForm from '../components/ContactForm'
import styles from '../styles/contactStyle'

class Contact extends Component {
	render() {
		return (
			<MainLayout headerText="Contact Us">
				<p>
					Get in touch to find out how you can make a difference resetting the router™! Join our AGORAfam today 
					to transcend new personal frontiers daily with a community of passionate youth pioneering innovative 
					solutions to create a brighter, more connected future. Feel free to send us your questions, concerns, 
					or anything else! We always love hearing from our readers!
				</p>

				<div className="form"><ContactForm /></div>

				<p>
					<div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.7044643059282!2d-74.408467970783!3d40.479294398709875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c6204e9aa237%3A0xe5876f68b0a625f3!2s1%20Tower%20Center%20Blvd%2C%20East%20Brunswick%2C%20NJ%2008816%2C%20USA!5e0!3m2!1sen!2sin!4v1574068744590!5m2!1sen!2sin" height="450" frameborder="0" />
					</div>
				</p>

				<style jsx>{styles}</style>
			</MainLayout>
		)
	}
}

export default Contact