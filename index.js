// import { optimizeImgs } from "./scripts/optimize-imgs.js";
const {optimizeImgs} = require("./scripts/optimize-imgs.js");
const imgOps = require("./scripts/img-ops");

// optimizeImgs("assets/images", "public/assets/images");
imgOps.process({
    input: "./_raw_images",
    output: "./assets/images",
    jpgQual: 70,
    pngQual: 70,
    webp: false,
    maxWidth: 1000,
  });