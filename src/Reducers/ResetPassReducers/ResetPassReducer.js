import {
    USER_RECOVERY_EMAIL_REQUEST,
    USER_RECOVERY_EMAIL_SUCCESS,
    USER_RECOVERY_EMAIL_FAIL,
    USER_RECOVERY_EMAIL_RESET,
    USER_RECOVERY_EMAIL_AND_OTP_REQUEST,
    USER_RECOVERY_EMAIL_AND_OTP_SUCCESS,
    USER_RECOVERY_EMAIL_AND_OTP_FAIL,
    USER_RECOVERY_EMAIL_AND_OTP_RESET,
    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAIL,
    USER_RESET_PASSWORD_RESET,
} from '../../Constants/ResetPassConst/ResetPassConst';

export const sendRecoveryEmailReducer = (
    state = { data: {}},
    action,
) => {
    switch(action.type) {
        case USER_RECOVERY_EMAIL_REQUEST:
            return { loading: true};
        case USER_RECOVERY_EMAIL_SUCCESS:
            return {loading: false, emailRes: action.payload };
        case USER_RECOVERY_EMAIL_FAIL:
            return {loading: false, error: action.payload };
        case USER_RECOVERY_EMAIL_RESET:
            return {}
        default:
            return state;
    };
};

export const sendRecoveryEmailAndOtpReducer = (
    state = {data: {}},
    action,
) => {
    switch(action.type) {
        case USER_RECOVERY_EMAIL_AND_OTP_REQUEST:
            return { loading: true};
        case USER_RECOVERY_EMAIL_AND_OTP_SUCCESS:
            return {loading: false, OtpRes: action.payload };
        case USER_RECOVERY_EMAIL_AND_OTP_FAIL:
            return {loading: false, error: action.payload };
        case USER_RECOVERY_EMAIL_AND_OTP_RESET:
            return {};
        default:
            return state;
    };
};

export const resetPasswordReducer = (
    state = {data: {}},
    action,
) => {
    switch(action.type) {
        case USER_RESET_PASSWORD_REQUEST:
            return { loading: true};
        case USER_RESET_PASSWORD_SUCCESS:
            return {loading: false, response: action.payload };
        case USER_RESET_PASSWORD_FAIL:
            return {loading: false, error: action.payload };
        case USER_RESET_PASSWORD_RESET:
            return{}
        default:
            return state;
    };
};