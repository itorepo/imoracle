import * as shell from "shelljs";
import path from "path";

//TODO: using this only as a workaround for not working
//	Grunt's grunt-contrib-clean NPM task
//	Switch back as solution will be found!

// first, remove old dist files if any
shell.rm("-rf",  path.join(__dirname, "dist"));


//TODO: the rest is done by Grunt
/*
// next, create the 'dist' folder again
shell.mkdir("-p", path.join(__dirname, "./dist"));

// then, copy pug views to the dist
shell.cp("-R", 
	path.join(__dirname, "./views"), 
	path.join(__dirname, "./dist")
);

// finally, add public assets

shell.cp("-R", 
	path.join(__dirname, "./src/public"), 
	path.join(__dirname, "./dist")
);
 */
