import React, { useState } from 'react';
import { options } from '../../utils/dropdownOptions';
import Dropdown from "./Dropdown";

function DropdownWrapper() {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Dropdown
				selected={selected}
				onSelectedChange={setSelected}
				options={options} />
		</div>
	);
}

export default DropdownWrapper;
