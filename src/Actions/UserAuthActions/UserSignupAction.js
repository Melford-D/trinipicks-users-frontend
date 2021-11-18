import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
} from '../../Constants/UserAuthConst/UserSignupConst';
import axios from 'axios';

export const userSignupAction = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        });

        const {data} = await axios.post(
            `https://trinipicks.sidehustle.ng/api/register`,
            userData,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        );

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data.payload
        });
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.message
        });
    }
};