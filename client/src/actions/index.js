import prescriptions from "../apis/prescriptions";
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_PRESCRIPTION,
	FETCH_PRESCRIPTIONS,
	FETCH_PRESCRIPTION,
	EDIT_PRESCRIPTION,
	DELETE_PRESCRIPTION
} from "./types";

export const signIn = (userId)=>{
	return{
		type: SIGN_IN,
		payload:userId
	}
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createPrescription = (formValues) => async (dispatch) => {
	let response = await prescriptions.post('/prescriptions', formValues);

	dispatch({
		type: CREATE_PRESCRIPTION,
		payload: response.data
	});
};

export const fetchPrescriptions = () => async (dispatch) => {
	let response = await prescriptions.get('/prescriptions');

	dispatch({
		type: FETCH_PRESCRIPTIONS,
		payload: response.data,
	});
};

export const fetchPrescription = (id) => async (dispatch) => {
	let response = await prescriptions.get(`/prescriptions/${id}`);

	dispatch({
		type: FETCH_PRESCRIPTION,
		payload: response.data,
	});
};

export const editPrescription = (id, formValues) => async (dispatch) => {
	let response = await prescriptions.put(`/prescriptions/${id}`,formValues);

	dispatch({
		type: EDIT_PRESCRIPTION,
		payload: response.data,
	});
};

export const deletePrescription = (id) =>  async (dispatch) => {
	await prescriptions.delete(`/prescriptions/${id}`);

	dispatch({
		type: DELETE_PRESCRIPTION,
		payload: id
	});
};

