import mongoose from 'mongoose';
import config from 'config';
import {DB_HOST, DB_PORT} from './keys';
import main from './application/app'

mongoose.connect("mongodb://"+DB_HOST+":"+DB_PORT+"/" + config.get('database_name'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false
})
.then(() => {
  main();
})
.catch( err => console.log("Failed to connect to database", err));
