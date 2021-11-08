import axios from 'axios';
import {
    USER_RECOVERY_EMAIL_REQUEST,
    USER_RECOVERY_EMAIL_SUCCESS,
    USER_RECOVERY_EMAIL_FAIL,
    USER_RECOVERY_EMAIL_AND_OTP_REQUEST,
    USER_RECOVERY_EMAIL_AND_OTP_SUCCESS,
    USER_RECOVERY_EMAIL_AND_OTP_FAIL
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
            payload: data.payload,
        })

    } catch (error) {
        dispatch({
            type: USER_RECOVERY_EMAIL_FAIL,
            payload: error.message
        })
    }
};

export const sendRecoveryEmailAndOtp = (email, otp) => async (dispatch) => {
    try {

        dispatch({ type: USER_RECOVERY_EMAIL_AND_OTP_REQUEST })

        const {data} = await axios.post(`https://trinipicks.sidehustle.ng/api/reset-password`,
        { email: email, otp: Number(otp)},
        {
            headers: {
                Accept: 'application/json',
            }
        })

        dispatch({
            type: USER_RECOVERY_EMAIL_AND_OTP_SUCCESS,
            payload: data.payload,
        })

    } catch (error) {
        dispatch({
            type: USER_RECOVERY_EMAIL_AND_OTP_FAIL,
            payload: error.message
        })
    }
};