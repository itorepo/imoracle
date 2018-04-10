import express from "express";
import path from "path";


// create express server
const app = express();


// prepare server runtime parameters
app.set("port", process.env.PORT || 3000);
// configure server view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(
	express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);


export default app;

