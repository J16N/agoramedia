import React, {Component} from 'react'
import { Form, Input, Button, Row, Col, Switch } from 'antd'
import styles from '../styles/contributeFormStyle'

const {TextArea} = Input;

const hasErrors = fieldsError => {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ContributeForm extends Component {
	constructor(props) {
		super(props);
		this.state = {checked: true};
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

	handleChange = checked => {
		// here we are resetting the error and updating the state
		const {resetFields} = this.props.form;
		resetFields(['work-sample']);
		this.setState({checked});
	}

	render () {
		const {
			getFieldDecorator, 
			getFieldsError, 
			getFieldError, 
			isFieldTouched,
		} = this.props.form;

		//only show error after a field is touched.
		const fullnameError = isFieldTouched('fullname') && getFieldError('fullname');
		const emailError = isFieldTouched('email') && getFieldError('email');
		const addressError = isFieldTouched('address') && getFieldError('address');
		const resumeError = isFieldTouched('resume') && getFieldError('resume');
		const workSampleError = isFieldTouched('work-sample') && getFieldError('work-sample');

		//Dynamic error message display
		const workSampleMessage = this.state.checked
			?"Please provide a link to your work sample!"
			:"Please provide a proper explanation!"

		
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
			<Form {...formItemLayout} onSubmit={this.handleSubmit} style={{'marginTop': '5%'}} className="form">
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

				<Form.Item label="Address" validateStatus={addressError?'error': ''} help={addressError||''} 
				className="custom-form-items">
					{getFieldDecorator('address', {
						rules: [
							{
								required: true, 
								message: 'Please enter your address!'
							},
						]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Facebook" className="custom-form-items">
					{getFieldDecorator('facebook', {
						rules: [{required: false}]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Twitter" className="custom-form-items">
					{getFieldDecorator('twitter', {
						rules: [{required: false}]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Instagram" className="custom-form-items">
					{getFieldDecorator('instagram', {
						rules: [{required: false}]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="LinkedIn" className="custom-form-items">
					{getFieldDecorator('linkedin', {
						rules: [{required: false}]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Resume" 
				extra="Link as either a PDF or Google Docs."
				validateStatus={resumeError?'error': ''} help={resumeError||''}
				className="custom-form-items"
				>
					{getFieldDecorator('resume', {
						rules: [{required: true, message: 'Please enter a link to your resume!'}]
					})(<Input />)}
				</Form.Item>

				<Form.Item label="Work Sample (Any discipline)" 
				extra={
					this.state.checked
					?"Share and paste link(s) here after uploading to Google Drive, Dropbox, or another \
						file storage service."
					:"Explain why you are unable to submit a work sample at this time."
				}
				validateStatus={workSampleError?'error': ''} help={workSampleError||''}
				>
					{getFieldDecorator('work-sample', {
						rules: [{required: true, message: workSampleMessage}]
					})(
					this.state.checked
					?<Input placeholder="Link to your work sample." />
					:<TextArea placeholder="Write here your explanation." rows={5} />)}
				</Form.Item>

				<Form.Item {...tailFormItemLayout} style={{'marginTop': '-2%'}} className="custom-form-items">
					<Switch 
					checkedChildren="Y"
					unCheckedChildren="N"
					onChange={this.handleChange}
					checked={this.state.checked} 
					defaultChecked />
				</Form.Item>

				<Form.Item label="Where did you find us?" 
				extra="Did someone recommend you for this position? If so, please let us know their name/s!" 
				className="custom-form-items"
				>
					{getFieldDecorator('place', {
						rules: [{required: false}]
					})(<Input />)}
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

export default Form.create()(ContributeForm)