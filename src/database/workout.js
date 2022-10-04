import mongoose from "mongoose";
const { connect } = mongoose;

const dbUri =
  process.env.NODE_ENV === "developer"
    ? process.env.MONGODB_URI_TEST
    : process.env.MONGODB_URI;

export const connectToDB = async () => {
  connect(
    dbUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      authSource: "admin",
    },
    (err, _) => {
      if (!err) {
        console.log("Info: Mongo successfully conected: OK");
      } else {
        console.log("Error: Mongo connection: FAILED");
        throw err;
      }
    }
  );
};
