import _ from "lodash";
import {
	FETCH_PRESCRIPTIONS,
	FETCH_PRESCRIPTION,
	CREATE_PRESCRIPTION,
	EDIT_PRESCRIPTION,
	DELETE_PRESCRIPTION
} from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_PRESCRIPTIONS:
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case FETCH_PRESCRIPTION:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_PRESCRIPTION:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_PRESCRIPTION:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_PRESCRIPTION:
			return _.omit(state, action.payload);

		default:
			return state;
	}
}
