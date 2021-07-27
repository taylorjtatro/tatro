#!/usr/bin/env node

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

