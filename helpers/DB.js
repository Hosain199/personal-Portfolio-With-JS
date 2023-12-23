
const mongoose = require('mongoose');
const mongodb_url = (process.env.ENVIRONMENT == "development") ? process.env.LOCAL_MONGO_URL : process.env.REMOTE_MONGO_URL;

class DB {
  static ConnectMongo() {
   mongoose.connect("mongodb://127.0.0.1:27017/Todo")
    .then(() => console.log("MongoDB Connected!"))
    .catch((error) => console.log("MongoDB Connection Error!"));
  }
}

module.exports = {DB};
