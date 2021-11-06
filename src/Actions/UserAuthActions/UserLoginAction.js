import axios from "axios";

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from '../../Constants/UserAuthConst/UserLoginConst';

export const login = (usernameOrEmail, password) => async (dispatch) => {
    console.log(usernameOrEmail, password)
    try {

        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const {data} = await axios.post(`https://trinipicks.sidehustle.ng/api/login`,
            {
                email: usernameOrEmail, 
                password : password
            },
            {
                headers: {
                   'Accept': 'application/json' 
                }
            }
        );

        dispatch({
           type: USER_LOGIN_SUCCESS,
           payload: data,  
        });

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.message,
        });
    }

};