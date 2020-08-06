import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PrescriptionList from "./prescriptions/PrescriptionList";
import PrescriptionCreate from "./prescriptions/PrescriptionCreate";
import PrescriptionEdit from "./prescriptions/PrescriptionEdit";
import PrescriptionDelete from "./prescriptions/PrescriptionDelete";
import PrescriptionShow from "./prescriptions/PrescriptionShow";
import SideBar from "./navigation-side-bar/SideBar";
import '../index.css';
import Header from "./header/Header";

class App extends React.Component {
	render() {
		return (
				<div className="layout-container">
						<HashRouter>
							<Header />
							<div className="layout-container">
								<div className="menu-container">
									<SideBar />
								</div>
								<div className="content-container">
									<Route path="/"
										   exact
										   component={PrescriptionList} />
									<Route path="/prescriptions/new"
										   component={PrescriptionCreate} />
									<Route path="/prescriptions/edit/:id"
										   component={PrescriptionEdit} />
									<Route path="/prescriptions/delete"
										   component={PrescriptionDelete} />
									<Route path="/prescriptions/show"
										   component={PrescriptionShow} />
								</div>
							</div>
						</HashRouter>
				</div>
		);
	}
}

export default App;
