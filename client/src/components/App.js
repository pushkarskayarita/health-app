import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PrescriptionList from "./prescriptions/PrescriptionList";
import PrescriptionCreate from "./prescriptions/PrescriptionCreate";
import PrescriptionEdit from "./prescriptions/PrescriptionEdit";
import PrescriptionDelete from "./prescriptions/PrescriptionDelete";
import PrescriptionShow from "./prescriptions/PrescriptionShow";
import Accordion from "./navigation-side-bar/Accordion";
import { menu } from "../utils/navigationMenu";
import '../index.css'

class App extends React.Component {
	render() {
		return (
			<div className="layout-container">
				<Accordion items={menu} />
				<div className="content-container"
					 style={{ marginTop: '10px' }}>
					<HashRouter>
						<div>
							<Route path="/"
								   exact
								   component={PrescriptionList} />
							<Route path="/prescriptions/new"
								   component={PrescriptionCreate} />
							<Route path="/prescriptions/edit"
								   component={PrescriptionEdit} />
							<Route path="/prescriptions/delete"
								   component={PrescriptionDelete} />
							<Route path="/prescriptions/show"
								   component={PrescriptionShow} />
						</div>
					</HashRouter>
				</div>
			</div>
		);
	}
}

export default App;
