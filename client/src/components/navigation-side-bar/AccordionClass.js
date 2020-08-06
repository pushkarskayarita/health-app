import React, { Component } from 'react';
import './Accordion.module.css';

class AccordionClass extends Component {

	state = {
		allActiveIndexes: [],
	};

	onTitleClick = (index) => {
		let arrayToAssign = this.state.allActiveIndexes;
		const isIndexExist = this.state.allActiveIndexes.includes(index);

		if (isIndexExist) {
			arrayToAssign = this.state.allActiveIndexes.filter(item => item !== index);
			this.setState({
				allActiveIndexes: [...arrayToAssign]
			});
		} else {
			this.setState({
				allActiveIndexes: [...arrayToAssign, index]
			});
		}
	};

	renderedItems = () => {
		const { items } = this.props;
		return items.map((item, index) => {
			//For each element of array active class is calculated
			const isIndexExist = this.state.allActiveIndexes.includes(index);
			const active = isIndexExist ? "active" : "";
			return (
				<div className="item"
					 key={item.title}>
					<div className={`title ${active}`}
					   onClick={() => {
						   this.onTitleClick(index);
					   }}>
						<i className="dropdown icon"/>
						{item.title}
					</div>
					<div className={`content ${active}`}>
						<p>{item.content}</p>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div className="accordion-sidebar">
				<div className="wrapper">
					<div className='accordion'>
						{this.renderedItems()}
					</div>
				</div>

			</div>
		);
	}
}

export default AccordionClass;
