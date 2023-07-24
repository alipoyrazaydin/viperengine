/*
    Builder for ViperEngine
    by Ali Poyraz AYDIN (KIGIPUX)
*/

const fs = require("fs");

// Check the buildpkg file
if (!fs.existsSync("./buildpkg.json")) { console.error("!! BUILDPKG.JSON doesn't exists. Exiting."); return; };

// Check the src directory
if (!fs.existsSync("./src")) { console.error("!! Source folder doesn't exists. Exiting."); return; };

// Check the build directory
if (!fs.existsSync("./build")) { console.log("-- Build folder is being created."); fs.mkdirSync("./build"); };

// Build Command
let gets = "/*\n    ViperEngine\n    by Ali Poyraz AYDIN\n*/";
const build = e => { console.log("Building src/" + e); gets += "\n\n// -> " + e + "\n" + fs.readFileSync("./src/" + e).toString("utf-8"); }

// Build the package.
const buildParameters = require("./buildpkg");
buildParameters.build_files.forEach(build)

// Write Build
fs.writeFileSync("./build/" + buildParameters.output_file, gets);
console.log(">> Build Complete.")