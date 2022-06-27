import mongoose from "mongoose";
const { connect } = mongoose;

const DB_URL_LOCAL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
const dbUri =
  process.env.NODE_ENV === "developer" ? process.env.DB_URL_TEST : DB_URL_LOCAL;

export const connectToDB = async () => {
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
        console.log("Info: Mongo successfully conected: OK");
      } else {
        console.log("Error: Mongo connection: FAILED");
        throw err;
      }
    }
  );
};
