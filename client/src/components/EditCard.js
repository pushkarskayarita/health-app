import React from 'react';

const EditCard = (props) => {
	return (
		<div className="ui fluid card ">
			<div className="content ui items">{props.children}</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className='ui basic teal button'>Edit</div>
					<div className="ui basic red button">Cancel</div>
				</div>
			</div>
		</div>
	);
};

export default EditCard;