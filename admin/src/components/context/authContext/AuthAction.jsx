const loginStart = () =>({
    type: 'LOGIN_START',
});
const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload:user,
});
const loginFailure = () => ({
    type: 'LOGIN_FAILURE',
});

const logout = () => ({
    type: 'LOGOUT',
})

export { loginStart, loginSuccess, loginFailure, logout}