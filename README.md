# N[ode.js] T[ypeScript] E[xpress] Starter Application - [nte-starter]
----

Set of best practices for creating NTE stack based applications applied from different sources into resulting minimum package required to begin the development of scalable web services.

### Prerequisites:
----

First of all you need to have `git` SCM installed on your target machine!
You may check it present by executing `git --version` command at any terminal of your choise.

Next, you need to have the uptodate `Node.js` runtime and `NPM` package manager versions on your computer. 
Check it by running:
````bash
	node --version
	npm --version
````
Node version `^9.5.0` and NPM version `5.6.0` must be fine


Finaly, you will need the TypeScript2 compiling and linting binaries installed:
````bash
	npm install --global typescript ts-node tslint
````

**Note:** installing packages globally may require `sudo` rigths on some environments, hovever,
it is strongly suggested to install them, as they will help to avoid multiple runtime issues!

### Setup
----

Once you have all this software installed on you machine, all you need is just few more simple steps
to make it up and running:
````bash
	cd working_dir
	git clone https://github.com/itorepo/nte-starter.git
	cd nte-starter
	npm install
	npm run start
````

### Initial directories structure:
----

````bash
	/nte-starter/
		|-- dist/
		|-- test/
		|-- src/
		|	|-- config/
		|	|-- controllers/
		|	|-- models/
		|	|-- views/
		|	`-- public/
		|
		|-- LICENSE
		|-- package.json*
		|-- package-lock.json*
		`-- README.md
````

