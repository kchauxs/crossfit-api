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
import { createAdmin } from "./utils/admin.js";
import { swaggerDocs } from "./v1/swagger.js";

const app = express();
const PORT = process.env.API_PORT || 3000;

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
    await createAdmin();

    app.listen(PORT, () => {
      console.log(`Info: API is listening on port ${PORT}`);
      swaggerDocs(app, PORT);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

start();
