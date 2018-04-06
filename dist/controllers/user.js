"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GET /account
 * Profile page.
 */
exports.getAccount = (req, res) => {
    res.render("account/profile", {
        title: "Account Management"
    });
};
//# sourceMappingURL=user.js.map