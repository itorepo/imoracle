import * as shell from "shelljs";
import path from "path";

// first, remove old dist files if any
//shell.rm("-rf",  path.join(__dirname, "./dist"));
shell.rm("-rf", "./dist");

// next, create the 'dist' folder again
//shell.mkdir("-p", path.join(__dirname, "./dist"));
shell.mkdir("-p", "./dist");
// then, copy pug views to the dist

/*shell.cp("-R", 
	path.join(__dirname, "./views"), 
	path.join(__dirname, "./dist")
);*/
shell.cp("-R", "./views", "./dist/");
// finally, add public assets
/*
shell.cp("-R", 
	path.join(__dirname, "./src/public"), 
	path.join(__dirname, "./dist")
);
 */
shell.cp("-R", "./src/public", "./dist/");

