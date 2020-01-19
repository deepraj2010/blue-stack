import Repo from '../models/data-access';

class Recent {
    constructor(args) {
        this.queryTerm = args.join(" ");
    }

    async execute() {
        try {
            let response = await Repo.find(this.queryTerm);
            console.log('Found!!', response);
            let array = [];
            response.forEach(element => {
                array.push(element.query);
            });
            return array;
        } catch(error) {
            throw error;
        }
    }
}

export default Recent;