import { Request, Response } from "express"

/**
 * GET /account
 * Profile page.
 */
export let getAccount = (req: Request, res: Response) => {
    res.render("account/profile", {
        title: "Account Management"
    });
};