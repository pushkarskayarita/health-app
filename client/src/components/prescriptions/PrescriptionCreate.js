import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPrescription } from '../../actions';

class PrescriptionCreate extends React.Component {

	renderError = ({ error, touched }) => {
		console.log(touched);
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{/*	takes hole object from props and sets it as props to input element {...input}*/}
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.createPrescription(formValues);
	};

	render() {

		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}
				  className="ui form error">
				<Field name="title"
					   component={this.renderInput}
					   label="Enter Title"
				/>
				<Field name="description"
					   component={this.renderInput}
					   label="Enter Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = "You must enter a title";
	}
	if (!formValues.description) {
		errors.description = "You must enter a description";
	}
	return errors;
};

const formWrapped = reduxForm({
	form: "prescriptionCreate",
	validate: validate,
})(PrescriptionCreate);

export default connect(null, { createPrescription })(formWrapped);
