import React from 'react';
import Modal from '../modal/Modal';
import styles from '../modal/Modal.module.css'

class PrescriptionDelete extends React.Component {

	renderActions = () => {
		return (
			<div className={styles.pushRight}>
				<button
					className={`${styles.button} ${styles.negative}`}>
					Delete
				</button>
				<button
					className={styles.button}>
					Cancel
				</button>
			</div>
		);
	};

	render() {
		return (
			<div>
				PrescriptionDelete
				<Modal
					title="Delete prescription"
					content="Some content"
					actions={this.renderActions()}
					onDismiss={() => this.props.history.push('/')} />
			</div>
		);
	}
}

export default PrescriptionDelete;
