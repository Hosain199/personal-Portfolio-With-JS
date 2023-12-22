const mongoose = require("mongoose");

const db_url = process.env.DEVELOPMENT === "development" ? process.env.LOCAL_MONGO_URL : process.env.REMOTE_MONGO_URL;

class DB {
    static ConnectMongo() {
      mongoose.connect(
        db_url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
          console.log("Mongodb Connected");
        }
      );
    }
}

module.exports = {DB};