import express from "express";
import routes from "./routes.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000/", "https://app-movies-nu.vercel.app/"],
  })
);
app.use(routes);
export default app;
