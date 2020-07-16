import React from 'react';
import './TimePeriodDispaly.css';

const timePeriodConfig = {
	day: {
		text: "Creative time",
		iconName: "sun"
	},
	night: {
		text: "Time to sleep",
		iconName: "moon"
	}
};

const getTimeOfDay = (hours) => {

	if (hours >= 9 && hours < 22) {
		return 'day';
	}
	if (hours >= 22 || hours < 9) {
		return 'night';
	}
	return <div>Some mistake in logic)</div>;
};

const TimePeriodDisplay = () => {
	const timePeriod = getTimeOfDay(new Date().getHours());
	const { text, iconName } = timePeriodConfig[timePeriod];
	return (
		<div className={`time-period-display ${timePeriod}`}>
			<div className={`icon-left`}>
				<i className={`massive ${iconName} icon `}/>
				<h1>{text}</h1>
			</div>
		</div>);
};


export default TimePeriodDisplay;
