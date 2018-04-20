require("dotenv").config();

//import modules
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Todo } from "./entity/Todo";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as path from "path";
import * as cors from "cors";

//import api
const user = require("./api/user/index");
//initialize express app
const app = express();

//use midleware
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", user);

app.listen(3000, () => console.log("listening"));
