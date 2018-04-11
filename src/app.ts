import express from "express";
import path from "path";


// create express server
const app = express();


// prepare server runtime parameters
app.set("port", process.env.PORT || 3001);
// configure server view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(
	express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);


// importing all project controllers
import * as homeController from "./controllers/home"

// defining routes handling points
app.get("/", homeController.index);


export default app;

