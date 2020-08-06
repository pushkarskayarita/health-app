import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styles from './Accordion.module.css';

const Accordion = ({ items }) => {
	const [activeIndexes, setActiveIndexes] = useState([]);

	const onTitleClick = (index) => {
		let arrayToAssign = activeIndexes;
		const isIndexExist = activeIndexes.includes(index);

		if (isIndexExist) {
			arrayToAssign = activeIndexes.filter(item => item !== index);
			setActiveIndexes([...arrayToAssign]);
		} else {
			setActiveIndexes([...arrayToAssign, index]);
		}
	};

	const renderedItems = items.map((item, index) => {
		//For each element of array active class is calculated
		const isIndexExist = activeIndexes.includes(index);
		const active = isIndexExist ? "active" : "";
		return (
			<div className={`${styles.item}`}
				 key={item.title}>
				<Link to={item.linkTo} className={`${styles.title} ${styles[active]}`}
					 onClick={() => {
						 onTitleClick(index);
					 }}>
					{item.content.length ? <i className={`${styles.dropdown} ${styles.icon}` }/> : null}
					{item.title}
				</Link>
				<div className={`${styles.content} ${styles[active]}`}>
					{item.content && item.content.length ? item.content.map(contentItem =>
						<p>{contentItem}</p>) : null}
				</div>

			</div>
		);
	});

	return (
		<div className={`${styles.wrapper}`}>
			<div className={`${styles.accordion}`}>
				{renderedItems}
			</div>
		</div>
	);
};

export default Accordion;
