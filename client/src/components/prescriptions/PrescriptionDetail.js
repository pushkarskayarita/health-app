import React from 'react';

const PrescriptionDetail = ({ icon, consumed, title }) => {
	return (

		<div className="item">
			<img className="ui  middle aligned tiny circular image"
				 src={icon}  alt= ""/>
			<div className="content">
				<a href="/" className="header">{title}</a>
				<div className="meta">
					<span>in progress</span>
				</div>
				<div className="description">
					<p>description</p>
				</div>
				<div className="extra">
					{consumed}/60 pills done
				</div>
			</div>
		</div>
	);
};

export default PrescriptionDetail;
