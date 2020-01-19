import config from 'config';
import HttpUtil from '../utils/http-utils'
import Repo from '../models/data-access';

class Google {
    constructor(args) {
        this.searchTerm = args.join(" ");
    }

    prepareParams() {
        const map = new Map();
        map.set('q', this.searchTerm);
        map.set('key', config.get('google_api_key'));
        map.set('cx', config.get('google_cx'));
        map.set('num', config.get('google_result_limit'));
        return map;
    }

    async execute() {
        try {
            let model = await Repo.save(this.searchTerm);
            console.log('Saved!!', model);
            let response = await HttpUtil.makeGet(config.get('google_search_url'), this.prepareParams());
            const responseArr = response['items'];
            if (responseArr == undefined) {
                throw new Error('Google: No result data');
            }
            let googleResponseArr = responseArr.map( element => Object.assign(new GoogleResponse, element));
            let linkDetails = googleResponseArr.map(googleResponse => (googleResponse.getLinkDetail()));
            return linkDetails;    
        } catch(error) {
            throw error;
        }
    }
}

class GoogleResponse {
    constructor() {
        this.link;
    }

    getLinkDetail() {
        return this.link;

    }
}

export default Google;