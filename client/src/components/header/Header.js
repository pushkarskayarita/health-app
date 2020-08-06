import React from 'react';
import {Link} from 'react-router-dom'
import GoogleAuth from "../google-auth/GoogleAuth";
import Logo from './Logo'
import styles from './Header.module.css'

function Header() {
	return (
		<div className={styles.headerContainer}>
			<Link to="/" className={styles.headerLogoContainer}><Logo/></Link>
			<div className={styles.headerAuthContainer} >
				<GoogleAuth />
			</div>

		</div>
	);
}

export default Header;
