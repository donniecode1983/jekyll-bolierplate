// import { optimizeImgs } from "./scripts/optimize-imgs.js";
// const {optimizeImgs} = require("./scripts/optimize-imgs.js");
const imgOps = require("./scripts/img-ops");

// Create the images folder in assets if it does not exist
const fs = require('fs')
const dir = './assets/images';

if(!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

// optimizeImgs("assets/images", "public/assets/images");
imgOps.process({
    input: "./_raw_images",
    output: "./assets/images",
    jpgQual: 70,
    pngQual: 70,
    webp: false
    // maxWidth: 3000,
  });