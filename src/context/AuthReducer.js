export const authReducer = (state,action) => {
    switch(action.type) {
        case 'Login' :
            return state = {currentUser:action.payload};
        case 'LogOut':
            return state = {currentUser:null};
        case 'SignUp':
            return state = {currentUser:action.payload};
    }
}