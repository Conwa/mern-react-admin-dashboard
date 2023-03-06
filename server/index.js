import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

console.log(bodyParser, cors, dotenv, express, helmet, mongoose, morgan);

/*CONFIGURATION*/
dotenv.config();
const app = express;
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES*/

app.use("/client", client);
app.use("/general", general);
app.use("/management", management);
app.use("/sales", sales);
