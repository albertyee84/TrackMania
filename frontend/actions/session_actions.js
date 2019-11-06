import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    });
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    });
};

const receiveErrors = errors => {

    return ({
        type: RECEIVE_ERRORS,
        errors: errors.responseJSON
    });
};

export const login = formUser => dispatch => APIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user),
        errors => dispatch(receiveErrors(errors)))
    );

export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser(),
        errors => dispatch(receiveErrors(errors)))
    );

    export const signup = formUser => dispatch => APIUtil.signUp(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors)));

// export const signup = formUser => {
//     return (
//         dispatch =>
//             APIUtil.signUp(formUser)
//                 .then(user => {

//                     return (
//                         dispatch(receiveCurrentUser(user)));
//                 }
//                     ,
//                     errors => {

//                         return (
//                             dispatch(receiveErrors(errors))

//                         );
//                     }

//                 ))

//         ;
// };