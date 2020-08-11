import React from 'react';
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({title,content,actions,onDismiss}) => {
	return ReactDOM.createPortal(
		<div onClick={onDismiss}
		className={styles.modal}
		>
			<div onClick={(event => event.stopPropagation())}
			className={styles.card}
			>
				<div className={styles.content}>
					<div className={styles.header}>{title}</div>
					<div className={styles.text}>{content}</div>
				</div>

				<div className={styles.actions}>{actions}</div>
			</div>
		</div>,
		document.querySelector('#modal')
	)
};

export default Modal;
