import React from 'react';
import { connect } from 'react-redux';
import { createPrescription } from '../../actions';
import PrescriptionForm from './PrescriptionForm';
import styles from "./Prescription.module.css";
import DropdownWrapper from "../dropdown/DropdownWrapper";

class PrescriptionCreate extends React.Component {

	onSubmit = (formValues) => {
		const { history } = this.props;
		this.props.createPrescription(formValues, history);
	};

	render() {
		return (
			<div style={{ minWidth: "80%" }}>
				<h3 className={styles.header}>Create Prescription</h3>
				<PrescriptionForm onSubmit={this.onSubmit} />
				<DropdownWrapper/>
			</div>
		);
	}
}

export default connect(null, { createPrescription })(PrescriptionCreate);
