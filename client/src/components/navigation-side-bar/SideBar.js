import React from 'react';

import { menu } from "../../utils/navigationMenu";
import styles from './SideBar.module.css';
import Accordion from "./Accordion";

function SideBar() {
	return (
		<div className={styles.sidebarContainer}>
			<Accordion items={menu} />
		</div>
	);
}

export default SideBar;
