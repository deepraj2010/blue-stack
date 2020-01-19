import get from 'axios';
import config from 'config';

class HttpUtil {

    static async makeGet(url, params) {
        try {
            let queryString = Array.from( params.keys() ).map(key => (params.get(key)) ? key + '=' + params.get(key): '').join('&');
            let completeUrl = url + '?'+ queryString;
            console.log(completeUrl);
            const response = await get(completeUrl, {timeout: config.get('http_client_timeout')});
            if(response.status == 200) {
                return response.data;   
            }
            throw new InternalError(response.status);
        } catch (error) {
            throw error;
        }
    };
}

export default HttpUtil;



