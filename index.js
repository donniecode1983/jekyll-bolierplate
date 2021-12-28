// import { optimizeImgs } from "./scripts/optimize-imgs.js";
const {optimizeImgs} = require("./scripts/optimize-imgs.js");
const imgOps = require("./scripts/img-ops");

// optimizeImgs("assets/images", "public/assets/images");
imgOps.process({
    input: "./assets/images",
    output: "./public/assets/images",
    jpgQual: 70,
    pngQual: 70,
    webp: true,
    maxWidth: 1000,
  });