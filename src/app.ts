import express from "express";
import path from "path";

// importing routes
import * as homeController from "./controllers/home";


class App {

	private engine = express();

	constructor ()	{
		// do the server initialization job
		this.doServerSetup();
		this.doRenderingSetup();
		this.doAssetsSetup();
		this.mountRoutes();
	}

	private mountRoutes() {
		this.engine.get("/", homeController.index);
	}

	private doServerSetup() {
		this.engine.set("port", process.env.PORT || 3001);
	}

	private doRenderingSetup() {
		this.engine.set("views", path.join(__dirname, "views"));
		this.engine.set("view engine", "pug");
		this.engine.locals.pretty = true;
	}

	private doAssetsSetup() {
		this.engine.use (
			express.static (
				path.join (__dirname, "public"), {
					maxAge: 3155759998 
				}
			)
		);
	}

	public getServerImpl() {
		return this.engine;
	}
}



export default new App().getServerImpl();

