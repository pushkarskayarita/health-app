import React from 'react';

import GoogleAuth from "../google-auth/GoogleAuth";
import Logo from './Logo'
import styles from './Header.module.css'

function Header() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerLogoContainer}><Logo/></div>
			<div className={styles.headerAuthContainer} >
				<GoogleAuth />
			</div>

		</div>
	);
}

export default Header;
