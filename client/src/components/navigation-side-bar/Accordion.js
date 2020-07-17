import React, { useState } from 'react';
import './Accordion.css';

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
			<div className="item"
				 key={item.title}>
				<div className={`title ${active}`}
					 onClick={() => {
						 onTitleClick(index);
					 }}>
					{item.content.length ? <i className="dropdown icon" /> : null}
					{item.title}
				</div>
				<div className={`content ${active}`}>
					{item.content && item.content.length ? item.content.map(contentItem =>
						<p>{contentItem}</p>) : null}
				</div>

			</div>
		);
	});

	return (
		<div className="accordion-wrapper">
			<div className="accordion">
				{renderedItems}
			</div>
		</div>
	);
};

export default Accordion;
