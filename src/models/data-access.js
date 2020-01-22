import config from 'config';
import Schema from './models';

class Repo {

    static async save(searchTerm) {
        return new Schema({
            query: searchTerm
        }).save();
    }

    static async find(string) {
        console.log('search string', string);
        let regex = new RegExp(string, 'i');
        return Schema.find({
            'query': regex
        }).sort({
            created: -1
        }).select('query -_id').limit(
            config.get('recent_result_limit')
        ).exec();
    }
}

export default Repo;

