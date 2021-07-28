#!/usr/bin/env node



/* DELETE THIS LINE TO DISPLAY CODE

//THis above shebang tells it to run this file in node js. if it was python it would be env python or bash or anything etc. 

//So we want to run this CLI and have it console.log our name
console.log(`
Taylor J Tatro

Developer building things with JS / NODEJS

Find me here: https://github.com/taylorjtatro

`);

//now can type ls -al in terminal to bring up all files and we can see that for index.js we onlyu have r permissions so we cant execute we can only read

// so to change that lets go

//chmod +x index.js

//so now we need to tell our terminal that it has to run the script with node js so we could write node ./index.js and it works 

//but at the top we need to add shebang

//Now lets make it so we can run it with just using its name so lets add package.json

//so first lets give it a name of tatro - must be cabob case and lowercase for name

//then version then bin and tatro to run index.js

//so when you install this package you will be able to run tatro and it will work.

//so to test this locally though we need to create a local link. So we will run 

//npm link

    //what happens is we install globally this whole package npm install --global tatro
    //we have to use sudo 

    //so now we can test any changes locally and they are uptodate by just runnning tatro because it is installed globally


//TO unlink / uninstall

    //npm uninstall -g tatro

//save to github and then we can publish it to npm with:

//npm publish

//then we can see it on npm by going to npm.im/tatro

//Then we can run it with npx tatro

//END of LEcture 13

/* Lecture 14 */


//So if we have it linked (npm link) then if we run npx it will by default run the local install so any updates we make and run npx tatro it will show because its first checking if we have a local install and if we do then it runs that and if not it pulls it from online.

//So we can use

//npm unlink 
    //same as uninstall global to remove the link and then it will run the version from npm

    //just to be sure we can run npx tatro@1.0.0 to make sure it is not running a cached version.




//So now we are going to make it so that it clears the conosle before printing our console.log so that when we run npx tatro we dont get that line that says npx: installed in...
 //so we could use console.clear() but that doesnt work on every operating system so we are going to add a package

 // npm install clear-any-console

 //so this is added to our dependencies in our package.json file and so what htat means is whenever someone installs our package these depencies will also be installed with it.

const clearConsole = require('clear-any-console');

clearConsole();

console.log(`
Taylor J Tatro - Testing for npx running local

Developer building things with JS / NODEJS

Find me here: https://github.com/taylorjtatro

`);

//create our .gitignore file and add node_modules

//look up emoji log for using with git commits

//so after saveing our code we need to update our version. If you try and npm publish it will get an error because we ahve not updated the version number

//Semantic Versioning

    // 1.0.0
    //Major . Minor . Patch
    //Patch is something very minor like typo fix 
    //Minor if we added a new feature that doesnt break anything or doesnt change anything major like our new clearConsole
    //Major if there is a new breaking change or there is a major upgrade with a lot of new features we would change the first version number

    //We could update manually in our package.json but a better way is to use our terminal
        // npm version patch
        // npm version minor
        // npm version major