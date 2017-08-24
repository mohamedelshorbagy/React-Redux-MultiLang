
import api from '../api';


const initialState = {
  content: api.getContent() // Loads default language content (en) as an initial state
};



const translateReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'SWITCH_LANGUAGES':
        return {
            content: api.getContent(action.lang)

        };
        break;
        default:
        return state;


    }


}


export default translateReducer;