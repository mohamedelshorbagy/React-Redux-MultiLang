const reducer = (state = 2 , action) => {
    switch(action.type) {
        case 'ADD':
        state = state + action.value;
        break;
        case 'SUB': 
        state = state - action.value;
        break;
    }
    return state;
}




export default reducer;
