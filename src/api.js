
import content from './translate';

let api = {
    getContent(lang = 'en') {
         return content.filter(obj => obj.lang === lang)[0];

    }


};



export default api;