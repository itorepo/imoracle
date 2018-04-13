/**
 * A module that defines the application server itself which
 * is an entry point for whole application to run and to server
 * user requests via HTTP.
 *
 * @module imoracle/server.ts
 * @author Kostyantyn Didenko <kdidenko@ito-global.com>
 * @date   12.04.2018
 **/

import app from "./App";

/**
 * starts express server
 */
const server = app.listen(app.get("port"), () => {
	console.log(
		"  App is running at http://localhost:%d in %s mode",
		app.get("port"),
		app.get("env")	
	);
	console.log("  Press CTRL-C to stop\n");
});

export default server;

