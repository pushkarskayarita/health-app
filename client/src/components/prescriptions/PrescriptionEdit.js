import _ from 'lodash';
import React from 'react';
import { connect } from "react-redux";
import { fetchPrescription, editPrescription } from "../../actions";
import PrescriptionForm from './PrescriptionForm';
import styles from './Prescription.module.css';

class PrescriptionEdit extends React.Component {
	componentDidMount() {
		this.props.fetchPrescription(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		const { history } = this.props;
		this.props.editPrescription(this.props.match.params.id, formValues, history);
	};

	render() {
		const { prescription } = this.props;
		if (!prescription) {
			return null;
		}
		console.log("Props edit", this.props);
		return (
			<div style={{ minWidth: "80%" }}>
				<h3 className={styles.header}>Edit Prescription</h3>
				<PrescriptionForm
					initialValues={_.pick(this.props.prescription, "title", "description")}
					onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { prescription: state.prescriptions[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPrescription, editPrescription })(PrescriptionEdit);
