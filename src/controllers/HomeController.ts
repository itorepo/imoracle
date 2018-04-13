/**
 * A module that defines Basic Pages navigation routes and
 * implements their handlers.
 *
 * @module imoracle/controllers/HomeController.ts
 * @author Kostyantyn Didenko <kdidenko@ito-global.com>
 * @date   12.04.2018
 **/

import { Request, Response } from "express";


class HomeController {

	/**
	 * GET /
	 * Home page.
	 * @param {Request} incoming homepage http request
	 * @param {Response} outgoing homepage html response 
	 * @return void
	 */
	public getIndex: any = (req: Request, res: Response) => {
		res.render("home", {
			title: "Home"
		});
	};

}

export default new HomeController();

