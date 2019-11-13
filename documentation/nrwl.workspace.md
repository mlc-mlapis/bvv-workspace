# HOW TO CREATE `NRWL / Nx` WORKSPACE

It's simple but and you have to remember to do several steps.

## Install globally `@angular/cli` and `@nrwl/cli`

Just run (assuming that you have already installed Node JS / NPM) the following command from CMD window on any directory because it doesn't affect that installation in any way (there's also a chance that you already have it so check it by using the command: `npm list -g @angular/cli`).

`npm i -g @angular/cli`

Also by the same way, install Nx CLI by using the command: `npm i -g @nrwl/cli`. After the Nx CLI is installed, you will have an nx global executable you use to run commands in your workspace.

Command `nx --help` shows the Extensible Dev Tools commands for Monorepo.

Now switch to a directory, you need to have as the parent one in which you want the workspace directory would be created. Than run the following command.

`npx --ignore-existing create-nx-workspace bvv-workspace`, where `bvv-workspace` is the directory which would host the workspace content.

During installation answer the questions:

**What to create in the new workspace?**

* **empty (an empty workspace)**
* web components	[a workspace with a single app built using web components]
* angular			[a workspace with a single Angular application]
* angular-nest		[a workspace with a full stack application (Angular + Nest)]
* react				[a workspace with a single React application]
* react-express		[a workspace with a full stack application (React + Express)]
* next.js			[a workspace with a single Next.js application]

**Application name:**

**Default stylesheet format:**

* CSS
* SASS(.scss)	[`http://sass-lang.com`]
* Stylus(.styl)	[`http://stylus-lang.com`]
* **LESS**		[`http://lesscss.org`]

For already existed Angular CLI project, you can add Nx by:  `ng add @nrwl/workspace`.

Adding capabilities to a workplace:

`npm i --save-dev @nrwl/angular` # Adds Angular capabilities
`npm i --save-dev @nrwl/web` # Adds Web capabilities
`npm i --save-dev @nrwl/react` # Adds React capabilities
`npm i --save-dev @nrwl/node` # Adds Node capabilities
`npm i --save-dev @nrwl/express` # Adds Express capabilities
`npm i --save-dev @nrwl/nest` # Adds Nest capabilities
`npm i --save-dev @nrwl/next` # Adds Next.js capabilities

and then:

`ng add @nrwl/angular` # Adds Angular capabilities
`ng add @nrwl/web` # Adds Web capabilities
`ng add @nrwl/react` # Adds React capabilities
`ng add @nrwl/node` # Adds Node capabilities
`ng add @nrwl/express` # Adds Express capabilities
`ng add @nrwl/nest` # Adds Nest capabilities
`ng add @nrwl/next` # Adds Next.js capabilities

The command `nx list` show available schematics:

* @nestjs/schematics
* @nrwl/angular
* @nrwl/cypress
* @nrwl/express
* @nrwl/jest
* @nrwl/nest
* @nrwl/next
* @nrwl/node
* @nrwl/react
* @nrwl/web
* @nrwl/workspace
* @schematics/angular
* @schematics/schematics
* @schematics/update

The command `nx list @nrwl/web` shows capabilities within a specific collection:

Available schematics in @nrwl/web :

* init : Add @nrwl/web to a project
* application : Create an application

## Create an application

Just run the command `ng g @nrwl/angular:application demo` and create the `demo` application.

## Serve an application

Just run the command `ng serve demo` and serve the `demo` application.

## Show dependencies

Just run the command `nx dep-graph` to show the dependencies.

## When something has been changed

`nx affected:build --base=master` # reruns build for all the projects affected by a PR.
`nx affected:test --base=master` # reruns unit tests for all the projects affected by a PR.

## Unit & E2E tests configuration & running

`ng g @nrwl/angular:app demo --e2e-test-runner=cypress --unit-test-runner=jest` # cypress and jest are actually defaults
`ng g @nrwl/angular:app demo --e2e-test-runner=protractor --unit-test-runner=karma`

`ng test demo`
`ng e2e demo`

## Creating a shared lib

`ng g @nrwl/workspace:lib data`
`ng g @nrwl/angular:lib ui`
`ng g component todos --project=ui --export`
