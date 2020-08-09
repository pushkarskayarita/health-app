import React, { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import { ReactComponent as ArrowDropdown } from "../../assets/arrow_drop_down-24px.svg";

function Dropdown({ options, selected, onSelectedChange }) {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick);
		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	const renderedOptions = options.map(option => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div key={option.value}
				 className={styles.item}
				 onClick={() => onSelectedChange(option)}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div
			ref={ref}
			className={styles.form}>
			<div className={styles.field}>
				<label className={styles.label}>Select an interval</label>
				<div
					onClick={
						() => setOpen(!open)
					}
					 className={`${styles.selection} ${styles.dropdown} ${open ? `${styles.visible} ${styles.active}` : ''}`}>
					<div className={`${styles.icon} ${styles.dropdown}`}><ArrowDropdown /></div>
					<div className={styles.text}>{selected.label}</div>
					<div className={`${styles.menu} ${open ? `${styles.visible} ${styles.transition}` : ''}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
}

export default Dropdown;
