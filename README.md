# Humpback

## Status

> ##### Stability: [1](http://nodejs.org/api/documentation.html#documentation_stability_index) - Experimental


##Preamble
Humpback was born out of necessity.  We fell in love with sails.js, Angular.js,
and Zurb Foundation and we knew right away that we wanted to build an intuitive
platform to use these frameworks in large production level applications at 
blistering development speeds.  The first attempts at Humpback were behind 
closed doors and intended to be proprietary. Then, after many many debates, we
decided to OS an entire rebuild of Humpback using node-machines, *possibly* treeline, 
JSdata, Foundation-apps, and all the wonderful new projects that have come out 
recently.  We are building the platform publicly so there is as much external 
input as possible and will launch contributor guidelines when they are ready.

Also, Humpback is a great solution if you are waiting on Angular 2's amazing server rendering.

This README.md file will be updated as this project evolves. Also, check out the WIKI.  
This product is currently *NOT PRODUCTION* ready. 

##Overview
Humpback is all about development speed and working in team enviroments. 
We've concretely decided to use Foundation-apps as the frontend layout framework and 
JSdata as the client side persistence layer.  Both of these are forward thinking 
technologies, and we are focusing on Humpback as a Single Page Application (SPA) 
builder not a website generator.  It's also a fast track for your next hackathon
with things like auto linking views/scss/controllers/modules etc.

##Quick Start
For now, there is no complete CLI or node module, so to get started with humpback
you can use the standard sails.js way.  First you will need to have node.js/NPM, 
sails.js, Ruby, Sass, and PhantomJs installed. 
*NOTE: PhantomJs works best if installed globally `npm install phantomjs -g`*
*PRO TIP: Mac users, perhaps use home-brew to install node/npm to avoid permission issues*

Then, Fork this repo
```sh
$ npm install

$ sails lift
```
This will install all of the node dependencies and bower components.  You'll be able to 
see your app at `localhost:1337/`


##Screencast
TODO: create some epic screencasts

##What you should know if you consider using Humpback
There is plethra of awesome technologies being used in Humpback.  If you 
consider using Humpback for production, you and your team should have an
understanding of the following:
  * Node.js
  * Sails.js
  * Angular.js
  * Foundation-apps
  * JS-Data
  * i18n
  * Redis

Additional things that will come in handy  
  * Node-machines
  * Bower
  * Grunt
  * kue

Methodologies to keep in mind
  * Single Page Applications (SPAs)
  * Model View Controller (MVC)

##Role based authorization, Lightweight CMS, Lightweight Email, and Prebuilt Back Back Admin
One of the most repetitive tasks that we do with every sails project is
Role based authorization, Content Management, Email Management, and GUI Data Management.  
So with Humpback, we built that in natively.  We did it for two reasons 1) we do it for 99% of 
the sails.js projects we create anyways 2) It's a great working example of how 
the humpback frontend and backend work together. It's not a sails.js version
of wordpress or anything like that, just a great time saving way to see all 
the working pieces.

By default a single super user is created:
  ```js
  username : admin,
  password : admin123
  ``` 
This user can Create Read Update Delete (CRUD) anything built on Humpback
and is the only source to add additional Admin users in. 

*NOTE: you'll want to change the super user's password before production*

##API
Humpback uses sails.js's native sails.socket.io combined with JSdata and a 
custom provider and a powerful factory for storage and communication of client side models.  
By default, humpback client side models communicate with the the REST routes via the prefix `/api` 
and pluralize turned to false. 

##File Structure
Humpback's file structure is identical to a normal Sails.js app with a few exceptions. 

  1. Humpback uses bower to manage frontend dependencies.
  *  Humpback generators create additional files compared to their sails.js counterparts.
  *  Humpback uses SASS in lieu of less (to support foundation-apps).
  *  Humpback includes a humans.txt.
  *  Humpback includes an app folder for angular controllers and models.
  *  Humpback includes `config/env/test.js` environment file for testing.
  *  Humpback includes a test folder for unit testing.
  *  Humpback includes a `.jshintrc` file for consitent javascript across the front and back end.
  *  Humpback removes the `assets/images` folder to be more consitent with the app file structure.
  *  Humpback removes the `assets/styles` folder to be more consitent with the app file structure.
  *  Humpback adds a `jobs` folder that can store kue background task jobs
  
  * -- api
    * -- controllers
    * -- hooks
    * -- models
 	  * -- machines
      * -- policies
      * -- responses
      * -- services
  * -- assets
    * -- assets
      * -- img
        * -- iconic
        * -- pngs
        * -- svgs
      * -- css
  	* -- app
  	  * -- controllers
  	  * -- directives
      * -- filters
      * -- hooks
  	  * -- models
  	  * -- policies
  	  * -- providers
  	  * -- services
      * -- views
  	  * -- app.js
  	* -- bower_components
  	* -- scss
  	* -- templates
  	* -- favicon.ico
  	* -- robots.txt
  	* -- humans.txt
  * -- config
  * -- jobs
  * -- node_modules
  * -- tasks
  * -- test
  * -- views
  * -- .gitignore
  * -- .jshintrc
  * -- .bowerrc
  * -- .sailsrc
  * -- .travis.yml
  * -- app.js
  * -- Gruntfile.js
  * -- bower.json
  * -- package.json
  * -- README.md
  * -- CONTRIBUTORS.md

##Linker
Humpback has a semantic layout for the `assets/app` folder (where all of the fronted files are stored).
It uses the humpback generators and `sails-linker` to automatically and semantically bind all of your
frontend JavaScript files together as sperate modules.  Then when the app is lifted for production,
it minifies all of it together into a single production.js file.  

*NOTE: You will still want to create all of your view files in .ejs in the `views` folder so that they can be compiled into the `assets/app/views` folder with grunt-ejs and html2js.*

##System Defaults
Humpback overrides as few system defaults as possible, but there are some
things that are changed for this particular SPA concept.
  * `config/blueprints.js` -> `prefix: 'api/'`
  * `tasks/register/compileAssets.js` -> `humpback`,`sass:dev`,`html2js:humpbackViews`,`svgtoolkit:dev`
  * `tasks/register/syncAssets.js` -> `humpback`,`sass:dev`,`html2js:humpbackViews`,`svgtoolkit:dev`

##Reserved Model Names
Humpback reserves certain model names. While you are free to extend the models
you should not attempt to create models with these name spaces:
  * [`Alert`](https://github.com/CaliStyle/humpback/wiki/Models#alert)
  * [`Model`](https://github.com/CaliStyle/humpback/wiki/Models#model)
  * [`Passport`](https://github.com/CaliStyle/humpback/wiki/Models#passport)
  * [`Permission`](https://github.com/CaliStyle/humpback/wiki/Models#permission)
  * [`RequestLog`](https://github.com/CaliStyle/humpback/wiki/Models#requestlog)
  * [`Role`](https://github.com/CaliStyle/humpback/wiki/Models#role)
  * [`Route`](https://github.com/CaliStyle/humpback/wiki/Models#route)
  * [`Setting`](https://github.com/CaliStyle/humpback/wiki/Models#setting)
  * [`SecurityLog`](https://github.com/CaliStyle/humpback/wiki/Models#securitylog)
  * [`User`](https://github.com/CaliStyle/humpback/wiki/Models#user)
  * [`Criteria`](https://github.com/CaliStyle/humpback/wiki/Models#criteria)

If you absolutely must use different model names, you can set replacements in the 
`config/humpback.js` file.  You'll need to update the `api/models` and `api/controller`
files as well.  See `humpback-hook` for more details.

If you are using sails-stripe, you should consider not using those model names as well.

##Reserved Controller Names
Humpback reserves certain controller names.  While you are free to extend the controllers
you shound not attempt to create controllers with these name spaces
  * [`UserController`](https://github.com/CaliStyle/humpback/wiki/Controllers#usercontroller)
  * [`AuthController`](https://github.com/CaliStyle/humpback/wiki/Controllers#authcontroller)
  * [`KueController`](https://github.com/CaliStyle/humpback/wiki/Controllers#kuecontroller)

##Reserved Policies

##Reserved Services

##Installable Hooks (aka Humpback Barnacles)
Humpback makes use of installable hooks, we call them barnacles. By default
the included barnicles are:
  * [`humpback-hook`](https://github.com/CaliStyle/humpback-hook) responsible for authorization logic, includes passport 
  * [`humpback-validation-hook`](https://github.com/CaliStyle/humpback-validation-hook) responsible for creating model validation errors in i18n
  * [`humpback-admin-hook`](https://github.com/CaliStyle/humpback-admin-hook) responsible for creating a lightweight and customizable admin area
  * [`humpback-cms-hook`](https://github.com/CaliStyle/humpback-cms-hook) responsible for creating an extenable lightweight content management system.
  * [`humpback-gui-hook`](https://github.com/CaliStyle/humpback-gui-hook) responsible for creating the admin data GUI
  * [`humpback-email-hook`](https://github.com/CaliStyle/humpback-email-hook) responsible for creating email templates 

##Generators
Humpback's generators override sails stock generators to create additional 
files:
  * [`sails generate humpback-api <API_NAME>`](https://github.com/CaliStyle/humpback/wiki/Generators#humpback-api)
  * [`sails generate humpback-model <MODEL_NAME>`](https://github.com/CaliStyle/humpback/wiki/Generators#humpback-model)
  * [`sails generate humpback-controller <CONTROLLER_NAME>`](https://github.com/CaliStyle/humpback/wiki/Generators#humpback-controller)
  * [`sails generate humpback-view <VIEW_NAME [FEAUTRE/MODULE]>`](https://github.com/CaliStyle/humpback/wiki/Generators#humpback-view)

Humpback also has a few custom generators that make development faster and will 
also work with the future release of humpback.io
  * TODO [`sails generate humpback-module <MODULE_NAME>`](https://github.com/CaliStyle/humpback/wiki/Generators#humpback-module)

Humpback comes bootstrapped with sails-stripe to make humpback apps SaaS 
friendly and stripe ready.  See [this link for setup](https://github.com/scott-wyatt/sails-stripe).
  * `sails generate sails-stripe`

##i18n model validation and Translation 
Humpback includes custom validation transaltion for i18n as well as uses i18n
to translate the app into the desired language.

##Foundation-apps
Humpback's default frontend is [Zurb's Foundation-apps](https://foundation.zurb.com/foundation-apps/).
Humpback exentends a few of foundation-apps' modules functionality but supports them all.  Since we are
using sails as the view router, you will want to avoid using foundation-apps built in router functionality
or any of it's functionality that relies on gulp.

##Bower
Humpback includes bower and it automatically installs it's front end dependencies when you run `npm install`.
One of the largest components is [humpback-core-pack](https://github.com/CaliStyle/humpback-core-pack). This
has some built in frontend features for the humpback CMS as well as a JS-data connector that works perfectly with
the sails API. It can also help with file uploads and more! Make sure to check it out and dig into the examples 
for more information. 

##Kue
Humpback takes advantage of the power of [Kue](https://github.com/Automattic/kue) for background tasks.  Kue depends on Redis, but don't worry, humpback also uses a fake redis for development so you can test without having to run Redis.

##Redis and Redis Event
Humpback uses Redis for quick lookups and pubsub for any data that doesn't not require a high level of persiteance.

Humpback has a variety of events that need to be concurrent between all instances running your app.  To do this, Humpback
uses [humpback-redis-event](https://github.com/CaliStyle/humpback-redis-event), which can broadcast model messages between instances and do updates.

##Iconic
Iconic and Open Iconic allow for responsive and stylized SVGs to be used 
across the frontend. Humpback uses grunt-svg-toolkit to optimize svgs.  
For more information on great ways to create SVGs for humpback, see Iconic's [illustrator-svg-exporter](https://github.com/iconic/illustrator-svg-exporter) 
and [grunt-svg-toolkit](https://github.com/iconic/grunt-svg-toolkit) 

##PhantomJS
We included a dependency on PhantomJs. This dependency is to support certain 
levels of image manipulation as well screenshot creation. For best restults 
PhantomJs should be installed globally.
`npm install phantomjs -g`
All though you are more then welcome to change it to your favorite node image processor.

##Tests
TODO: Testing is the greatest practiced fundamental in the development world and is always worth the time to set up.
Humpback uses Mocha to perform backend tests and Karma to perform frontend testing and a JShint file to keep coding
consitent.
TODO: ADD TESTS!

##Contributing
See `CONTRIBUTORS.md` or [click here](https://github.com/CaliStyle/humpback/blob/master/CONTRIBUTORS.md)

##Change Log

###0.11.3


###0.11.2
Stability updates for barnicles and settings

###0.11.1
Add initial View generator and semantic layout of module names and file includes.
