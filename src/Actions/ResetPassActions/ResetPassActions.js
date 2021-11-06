import axios from 'axios';
import {
    USER_RECOVERY_EMAIL_REQUEST,
    USER_RECOVERY_EMAIL_SUCCESS,
    USER_RECOVERY_EMAIL_FAIL
} from '../../Constants/ResetPassConst/ResetPassConst';

export const sendRecoveryEmail = (email) => async (dispatch) => {
    try {

        dispatch({ type: USER_RECOVERY_EMAIL_REQUEST })

        const {data} = await axios.post(`https://trinipicks.sidehustle.ng/api/send-otp`,
        { email: email },
        {
            headers: {
                Accept: 'application/json',
            }
        })

        dispatch({
            type: USER_RECOVERY_EMAIL_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: USER_RECOVERY_EMAIL_FAIL,
            payload: error.message
        })
    }
};