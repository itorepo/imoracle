"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Express imports
const express_1 = require("express");
// Database
//import mongo from "connect-mongo";
// Settings
//import dotenv from "dotenv";
const path_1 = require("path");
// Load environment variables from .env file, where API keys and passwords are configured
//dotenv.config({ path: ".env.local" });
//const MongoStore = mongo(session);
// Controllers (route handlers)
const homeCtrl = require("./controllers/home");
//import * as userController from "./controllers/user";
// Create Express server
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
/**
 * Primary app routes.
 */
app.get("/", homeCtrl.index);
exports.default = app;
//# sourceMappingURL=app.js.map