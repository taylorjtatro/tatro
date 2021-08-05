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

/**** DELETE LINE TO DISPLAY CODE

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
        // npm help version will give you all kinds of info

        //git has to be up to date for these to work so need to commit code and push it first

//Then can push code with npm publish


/*Lecture 15 */  

/*Delete this line to display code

//So now lets go to package.json to add a description to our package "Get to know Taylor Tatro via `npx tatro`."

//Then we can require our package.json here and when we do that it actually converts it to a javascript object for us to use. 


//const clearConsole = require('clear-any-console');
    //the welcome package that we download here actually has clearConsole built in since he built both so we actually dont need this anymore and can remove it from our package.json

    //to do that we can go : 
        // npm uninstall clear-any-console

        //and we can see that then removes it from ourdepencies in our package.json

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');


//clearConsole();

//lets create a bit of info at the top of our welcome
//console.log(`
//NAME: ${pkgJSON.name}
//VERSION: ${pkgJSON.version}
//DESCRIPTION: ${pkgJSON.description}

//`)





//we could do above but there is a package we can use to make it a bit nicer. it is also created by Awais

//npm install cli-welcome


//can view documentation on github
welcome({
    title: pkgJSON.name,
    tagLine: `Nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    //bgcolor: `#FADC00,
    //color: `#00000`,
    bold: true,
    clear: true//this can be set to false and it wont clear teh console
})

console.log(`
Taylor J Tatro - Testing for npx running local

Developer building things with JS / NODEJS

Find me here: https://github.com/taylorjtatro

`);

//End of lecture 115 we are going to commit to git 

//then npm version major

//then npm publish our v2 now that we ahve this nice new header




/**Lecture 116 */

//So now lets add a read me

//1. go to package.json and add "Keywords"nwhich is an array

//now lets add a read me .md and we will start it with an h1 heading # 
//then we will add a blcok code
//then h2 ##
//then just text
//then  ```sh is shell script

//then in our readme if we press COMMAND key and SHIFT and V it willl preview it for us

//then we can add this to our git with a comment to say we did keywords and readme

//then npm patch
    //to make it 2.0.1
//Then npm publsih

//thenn if we go to our npm page we can see this nice looking read me and our keywords for people to find us

//when we publish real ones we will want to add a license and probably our gitguh repo for the project so people can go there

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');


//can view documentation on github
welcome({
    title: pkgJSON.name,
    tagLine: `Nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    //bgcolor: `#FADC00,
    //color: `#00000`,
    bold: true,
    clear: true//this can be set to false and it wont clear teh console
})

console.log(`
Taylor J Tatro - Testing for npx running local

Developer building things with JS / NODEJS

Find me here: https://github.com/taylorjtatro

`);

