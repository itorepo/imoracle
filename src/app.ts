/**
 * A module that defines the application class instance responsible
 * for the core engine initialization, configuration, request
 * controllers attachment and view engine setup.
 *
 * @module imoracle/server.ts
 * @author Kostyantyn Didenko <kdidenko@ito-global.com>
 * @date   12.04.2018
 **/

// importing core modules
import express from "express";
import path from "path";

// importing routes
import home from "./controllers/HomeController";


class App {

	/**
	 * @private engine - holds the chosen application engine
	 * instance ({Express} MVC at this time)
	 */
	private engine = express();

	/**
	 * Makes the application core elements initialization and
	 * returns the {App} instance.
	 * @constructor
	 */
	constructor ()	{
		// do the server initialization job
		this.coreEngineSetup();
		this.viewEngineSetup();
		this.setPublicAssets();
		this.mountRoutes();
	}

	/**
	 * Defines supported HTTP URL Paths and attaches corresponding
	 * handlers (controllers) to process HTTP Requests and produce
	 * appropriative HTML Responses
	 * @private mountRoutes()
	 */
	private mountRoutes() {
		this.engine.get("/", home.getIndex);
	}

	/**
	 * Prepares the core engine and configures it parameters according
	 * to application configuration settings.
	 * @private coreEngineSetup()
	 */
	private coreEngineSetup() {
		this.engine.set("port", process.env.PORT || 3001);
	}

	/**
	 * Prepares the view engine and configures it parameters according
	 * to application configuration settings.
	 * @private viewEngineSetup()
	 */
	private viewEngineSetup() {
		this.engine.set("views", path.join(__dirname, "views"));
		this.engine.set("view engine", "pug");
		this.engine.locals.pretty = true;
	}

	/**
	 * Defines the application configuration for handling directories
	 * containing public assets (stylesheets, images, scripts, etc...)
	 * @private setPublicAssets()
	 */
	private setPublicAssets() {
		this.engine.use (
			express.static (
				path.join (__dirname, "public"), {
					maxAge: 3155759998 
				}
			)
		);
	}

	/**
	 * Returns the initialized core instance of the application, 
	 * ready to start listening and handling client's HTTP Requests.
	 * @public getServerImpl()
	 * @returns {Express}
	 */
	public getServerImpl() {
		return this.engine;
	}

}

/**
 * Module export which creates, initializes and returns
 * the prepared core instance of application.
 */
export default new App().getServerImpl();

