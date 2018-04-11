import * as shell from "shelljs";

// first, remove old dist files if any
shell.rm("-rf", "./dist");
// next, create the 'dist' folder again
shell.mkdir("-p", "./dist");
// then, copy pug views to the dist
shell.cp("-R", "./views", "./dist/");
// finally, add public assets
shell.cp("-R", "./src/public", "./dist/");


