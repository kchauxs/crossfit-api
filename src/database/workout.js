import mongoose from "mongoose";
const { connect } = mongoose;

const DB_URL_LOCAL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
const dbUri =
  process.env.MODE === "developer" ? process.env.DB_URL_TEST : DB_URL_LOCAL;

export const connectToAccessDB = async () => {
  connect(
    dbUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      authSource: "admin",
    },
    (err, res) => {
      if (!err) {
        console.log("Info: Mongo successfully conected: Ok");
      } else {
        console.log("Error: Mongo connection: Failed");
        throw err;
      }
    }
  );
};
