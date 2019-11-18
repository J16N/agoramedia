import React, {Component} from 'react'
import { Form, Input, Button, Row, Col, Switch } from 'antd'
import styles from '../styles/contributeFormStyle'

const {TextArea} = Input;

const hasErrors = fieldsError => {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ContactForm extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//to disable submit button at the beginning
		this.props.form.validateFields();
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// handle the form submit here...
			}
		})
	}

	render() {
		const {
			getFieldDecorator, 
			getFieldsError, 
			getFieldError, 
			isFieldTouched,
		} = this.props.form;

		//only show error after a field is touched.
		const fullnameError = isFieldTouched('fullname') && getFieldError('fullname');
		const emailError = isFieldTouched('email') && getFieldError('email');
		const subjectError = isFieldTouched('subject') && getFieldError('subject');
		const messageError = isFieldTouched('message') && getFieldError('message');

		
		//responsive form layout
		const formItemLayout = {
			labelCol: {
				xs: {span: 24},
				sm: {span: 5}
			},
			wrapperCol: {
				xs: {span: 24},
				sm: {span: 14}
			}
		};

		const tailFormItemLayout = {
			wrapperCol: {
				xs: {span: 24, offset: 0},
				sm: {span: 14, offset: 5}
			}
		};

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="Full Name" validateStatus={fullnameError?'error': ''} help={fullnameError||''} 
				className="custom-form-items">
					{getFieldDecorator('fullname', {
						rules: [
							{
								required: true, 
								message: 'Please enter your full name!'
							},
							{
								whitespace: true,
								message: 'We need your full name!'
							}
						]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="E-mail" validateStatus={emailError?'error': ''} help={emailError||''} 
				className="custom-form-items">
					{getFieldDecorator('email', {
						rules: [
							{
								type: 'email',
								message: 'Please enter a valid E-mail!'
							},
							{
								required: true,
								message: 'Please enter your E-mail!'
							}
						]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Subject" validateStatus={subjectError?'error': ''} help={subjectError||''} 
				className="custom-form-items">
					{getFieldDecorator('subject', {
						rules: [
							{
								required: true, 
								message: 'Please enter your subject!'
							},
						]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Message" 
				extra="Tell us whether you’re an individual, business or organization and what you’re interested in."
				validateStatus={messageError?'error': ''} help={messageError||''} className="custom-form-items"
				>
					{getFieldDecorator('message', {
						rules: [{required: true, message: 'What would you like to say?'}]
					})(<TextArea placeholder="Write here your message." rows={8} />)}
				</Form.Item>

				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} style={
						{
							'borderRadius': '50px', 
							'width':'35%',
							'fontWeight': '500',
							'fontSize': '1.1rem',
							'letterSpacing': '1.5px',
							'height': '40px'
						}
					}
					>
						SUBMIT
					</Button>
				</Form.Item>

				<style jsx>{styles}</style>
			</Form>
		)
	}
}

export default Form.create()(ContactForm)