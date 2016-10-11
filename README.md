# code-test-app

Basic code test application.

Using Onsen as a mobile framework incorporating the foursquare search API and Google maps static map api to provide a search for 
a venue near me application.  

This includes set up shell script to run the angular package install called installer.sh.  Which will load the relevant
dependancies from the included package.JSON.

Also included is gulp to create SASS versions of the style sheet, and a task runner to compile these files, as well as compressing the CSS on 
output.  However due to time constraints this hasn't been fully hooked up at this point.  There is however again a shell script 
to install and run it. And it will all work in a production enviroment.  However locally, I had conflicts between my browser synch and
gulp-sass auto reload feature.  This is within an production enviroment something which shouldn't be an issue, as these 
conflicts are usually resolved. 

Also incorportated although not completed in time is Jasmine unit test frame work with the dependancies described but no unit tests written.

With more time on this project I would have also liked to have shifted all the templates into directives within angular in order
to reduce the amount of reused code further. 

Deploy notes
#################

1. Download the zip from github
2. unpack the files
3. ensure you have node.js installed. 
4. Cd to your working directory
5. run via command line the installer.sh
6. once this has run type in the terminal npm start this will launch the app
7. open a new terminal window
8. cd to the style/ directory and run the gulp.sh
9. start gulp in command line by typing gulp

The default url is /index.html
The unit tests are under/specRunner.html
