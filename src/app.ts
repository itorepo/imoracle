// Express imports
import express from "express";
import session from "express-session";
import expressValidator from "express-validator";
import flash from "express-flash";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import lusca from "lusca";
// Database
import mongo from "connect-mongo";
import mongoose from "mongoose";

import passport from "passport";
import bluebird from "bluebird";


// Settings
import dotenv from "dotenv";
import path from "path";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.local" });
const MongoStore = mongo(session);

// Controllers (route handlers)
import * as homeCtrl from "./controllers/home";
import * as userController from "./controllers/user";


// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, { useMongoClient: true }).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

// Create Express server
const app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(
    express.static(
        path.join(__dirname, "public"), { maxAge: 31557600000 }
    )
);

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});


/**
 * Primary app routes.
 */
app.get("/", homeCtrl.index);

export default app;