import express, { json } from "express";
import routes from "./routes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
export default app;
