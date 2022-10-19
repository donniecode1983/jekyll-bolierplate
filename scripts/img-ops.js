const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const imageSize = require("image-size");

// get the extension of the file
function getExt(filename) {
  let ext = path.extname(filename || "").split(".");
  return ext[ext.length - 1];
}

// get the file name without the ext
function getFileName(filename, ext) {
  let fileBaseName = path.basename(filename, ext);
  return fileBaseName;
}

// This is the the function that starts the image processing
function process(args) {
  console.log(args.input);
  console.log(args.output);
  console.log(args.jpgQual);
  console.log(args.pngQual);
  console.log(args.webp);

  let fileNames = fs.readdirSync(args.input);

  fileNames.forEach((file) => {
    // get the file path and ext
    let fileLocation = `${args.input}/${file}`;
    let fileExt = getExt(file);
    let fileName = getFileName(file, `.${fileExt}`);

    switch (fileExt) {
      case "jpg":
        console.log(`is a JPG`);
        processJpg({
            quality: args.jpgQual,
            webp: args.webp,
            fileLocation: fileLocation,
            file: file,
            outputDir: args.output,
            maxWidth: args.maxWidth,
          });
        break;
      case "jpeg":
        console.log(`is a JPEG`);
        processJpg({
            quality: args.jpgQual,
            webp: args.webp,
            fileLocation: fileLocation,
            file: file,
            outputDir: args.output,
            maxWidth: args.maxWidth,
          });
        break;
      case "png":
        console.log(`is a PNG`);
        break;
      default:
        console.log(`nobody knows what the hell it is...`);
    }

    // If the image is a jpeg then process via the jpg function
    // if (fileExt == "jpg" || fileExt == "jpeg") {
    //   processJpg({
    //     quality: args.jpgQual,
    //     webp: args.webp,
    //     fileLocation: fileLocation,
    //     file: file,
    //     outputDir: args.output,
    //     maxWidth: args.maxWidth,
    //   });
    // }
  });

  // This function handles JPG images.
  function processJpg(args) {
    // load the image object into the sh var
    let sh = sharp(args.fileLocation);

    // get the image's width
    let imgWidth = imageSize(args.fileLocation).width;

    //if width of image is more than maxWidth resize it.
    // if (imgWidth > args.maxWidth) {
    //   console.log("sizing ran");
    //   sh.resize(args.maxWidth);
    // }
    console.log(args.fileLocation)
    // process the jpg and write it to the output folder
    sh.normalise(true)
      .jpeg({
        mozjpeg: true,
        quality: args.quality,
        progressive: true,
      })
      .toFile(`./${args.outputDir}/${args.file}`);

    // create thumbnail
    sh.normalise(true)
    .jpeg({
        mozjpeg: true,
        quality: args.quality,
        progressive: true,
    })
    .resize(200)
    // .composite([{input: './logo.png', gravity: 'center', blur: 100}])
    .toFile(`./${args.outputDir}/thumb_${args.file}`)

    // if create webp is true then run the createWebp function
    if (args.webp) {
      createWebp({
        quality: "",
        webp: false,
        fileLocation: args.fileLocation,
        file: args.file,
        outputDir: args.outputDir,
        maxWidth: args.maxWidth,
      });
    }
  }

  function createWebp(args) {
    // load the image object into the sh var
    let sh = sharp(args.fileLocation);

    // get the image's width
    let imgWidth = imageSize(args.fileLocation).width;

    //if width of image is more than maxWidth resize it.
    if (imgWidth > args.maxWidth) {
      sh.resize(Math.ceil(args.maxWidth/1.5));
    }

    // process the webp and write it to the output folder
    sh.webp({
      reductionEffort: 6,
      quality: 70,
    }).toFile(`${args.outputDir}/${args.file}.webp`);
  }
}

module.exports = { process };
