export const DispatchFunction = (state,action) => {
    switch(action.type) {
        case 'Light': 
            state = {darkmode:false}
        break;
        case 'Dark':
            state = {darkmode:true}
        break;
        case 'Toggle':
            state = {darkmode:!state.darkmode};
        break;
        default:
            return state;
    }
    return state;
}