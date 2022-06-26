import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import xss from "xss-clean";
import { json } from "body-parser";

import { routes } from "./v1/routes";
import { swaggerDocs as V1SwaggerDocs } from "./v1/swagger";

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(json());
app.use(cors());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(helmet());
app.use(xss());

routes(app);

app.listen(PORT, () => {
  console.log(`Info: API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
