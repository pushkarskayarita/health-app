import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './PrescriptionForm.module.css'
import sharedStyles from './Prescription.module.css'

class PrescriptionForm extends React.Component {

	renderError = ({ error, touched }) => {
		console.log(touched);
		if (touched && error) {
			return (
				<div className={`${styles.error} ${styles.message}`}>
					<div className={`${styles.header}`}>{error}</div>
				</div>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `${styles.field} ${meta.error && meta.touched ? `${styles.error}` : ""}`;
		return (
			<div className={className}>
				<label className={styles.header}>{label}</label>
				<input {...input} autoComplete="off" />
				{/*	takes hole object from props and sets it as props to input element {...input}*/}
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues, ) => {
		const { history } = this.props;
		this.props.onSubmit(formValues, history);
	};

	render() {
		console.log("PROPS", this.props.history);
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}
				  className={` ${styles.form} error`}>
				<Field name="title"
					   component={this.renderInput}
					   label="Enter Title"
				/>
				<Field name="description"
					   component={this.renderInput}
					   label="Enter Description" />
				<button className={`${sharedStyles.button} ${sharedStyles.primary}`}>Submit</button>
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
export default reduxForm({
	form: "prescriptionForm",
	validate: validate,
})(PrescriptionForm);

