The error "Cannot use import statement outside a module" occurs because:

1. The files have .js extension but use ES6 import/export syntax

2. Node.js by default treats .js files as CommonJS modules (which use require/module.exports)

3. To use ES6 imports/exports, you need to either:
    - Add "type": "module" to package.json (learn how to create and edit package.json file for /Practice directory)
    - Or rename files to .mjs
    - Or configure the project properly


------------------------------------

Apparently, I'm using commonJS (or .js files are by-default considered as commonJS, not sure). But in commonJS, in exportee file, we do the following :
    module.exports = rotate;

while in importee file, we do the following :
    const rotate = require('../../189.RotateArray/Javascript/RotateArray.js');


But, this caused the entire exportee program to be exucuted, such that first, the contents of the exportee file ran and then the contents of the importee file ran. This is not an error, instead it is the default behaviour of commonJS. To curcumvent thisbehaviour, we do the following : 
    if (require.main === module) {
    main();
}

(we imported 189. problem's 'rotate' function in 189. problem)