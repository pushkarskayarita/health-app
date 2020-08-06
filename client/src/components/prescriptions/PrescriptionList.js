import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Prescription.module.css';
import { fetchPrescriptions } from '../../actions';

class PrescriptionList extends React.Component {
	componentDidMount() {
		this.props.fetchPrescriptions();
	}

	renderCreate = () => {
		if (this.props.isSignedIn) {
			return (
				<div style={{  maxWidth:"100%",alignSelf:"flex-end" }}>
					<Link to="prescriptions/new"
						  className={`${styles.button} ${styles.primary}`}>
						Create Prescription
					</Link>
				</div>
			);
		}
	};

	renderAdmin = (prescription) => {
		if (prescription.userId === this.props.currentUserId) {
			console.log("USerid", prescription.userId);
			return (
				<div className={`${styles.floated} ${styles.right}`}>
					<Link to={`/prescriptions/edit/${prescription.id}`}
						  className={`${styles.button} ${styles.primary}`}>
						Edit
					</Link>
					<Link to="" className={`${styles.button} ${styles.negative} `}>
						Delete
					</Link>
				</div>

			);
		}

	};

	renderList = () => {
		const { prescriptions } = this.props;
		return prescriptions.map(prescription => {
			return (
				<div className={styles.listItem}
					 key={prescription.id}>

					<div className={styles.icon}>
						<img src={`${process.env.PUBLIC_URL}/images/disease.png`}
							 alt="" />
					</div>
					<div className={styles.content}>
						<div className={styles.title}>
							{prescription.title}
						</div>

						<div className={styles.description}>
							{prescription.description}
						</div>
					</div>
					{this.renderAdmin(prescription)}
				</div>
			);
		});
	};

	render() {
		console.log(this.props);
		return (
			<div style={{display:"flex",flexDirection:"column"}}>
				<h2>
					Prescriptions List
				</h2>
				<div className={styles.container}>{this.renderList()}</div>
				{this.renderCreate()}
			</div>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		prescriptions: Object.values(state.prescriptions),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchPrescriptions })(PrescriptionList);
