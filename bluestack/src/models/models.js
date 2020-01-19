import mongoose from 'mongoose';
import config from 'config';

const searchQuerySchema = new mongoose.Schema({
    query:{type: String, index: true}
});

module.exports = mongoose.model(config.get('collection_name'), searchQuerySchema);