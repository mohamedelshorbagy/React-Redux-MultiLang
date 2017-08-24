const dataReducer = (state = {
    name: 'Mohamed',
    age: 21

} , action) => {
    switch(action.type) {
        case 'Get_Name':
        state = {
            ...state,
            name: action.value

        };
        break;

        case "Get_Age":
        state = {
            ...state,
            age: action.value
        };
        break;


    }

    return state;



}



export default dataReducer;