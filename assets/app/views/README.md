##VIEWS
Views are SPA view states.  You should not edit the HTML files in this folder, 
instead edit the EJS files in the `views/` folder.  This allows for the EJS files
to still act like layout views which speeds up initial load time.

##Grunt
Views .html files are converted from ejs and included into the app via a grunt task. 
see `tasks/register/humpback.js` They can be all loaded into a single JS HTML template 
or loaded by module depending on your Apps size.

To create a new View use the command 
```sh
$ sails generate humpback-view <VIEW_NAME>
````

Example:
```sh
$ sails generate humpback-view profile/dashboard
```