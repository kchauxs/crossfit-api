import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import xss from "xss-clean";
import bodyParser from "body-parser";

import { routes } from "./v1/routes/index.js";
import { connectToDB } from "./database/workout.js";

const app = express();
const PORT = process.env.API_PORT || 4044;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(helmet());
app.use(xss());

routes(app);

const start = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`Info: API is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

start();
