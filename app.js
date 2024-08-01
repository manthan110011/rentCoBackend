import express from "express";
const app = express();

import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import dbConnection from "./src/database/dbConnection.js";
import routes from "./src/routes.js";

dotenv.config({ path: ".env" });

const PORT = 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

dbConnection();

app.use("/api/", routes);

app.listen(PORT, () => console.log("Listening on PORT " + PORT));