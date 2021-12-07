
// import sharp from 'sharp';
// import fs from 'fs';
// import path from 'path';

const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

 // Get the extension of the file
 function getExtension(filename) {
    let ext = path.extname(filename || '').split(".");
    return ext[ext.length - 1];
}

function optimizeImgs(input, output) {
    let directory_name = input;
    let ouput_dir = output;
    let filenames = fs.readdirSync(directory_name);
    
    
    // Iterate through all the files in the folder
    filenames.forEach((file) => {
        const fileFormat = getExtension(file);
        console.log(fileFormat, file);
    
        // SVG Processing
        if (fileFormat === 'svg') {
            console.log('SVG Processing coming soon. Skipping for now...');
            return;
        }
    
        // JPG & PNG Processing
        let sh = sharp('./' + directory_name+ '/' + file);
        if (fileFormat === 'jpg' || fileFormat === 'jpeg') {
            sh = sh.jpeg({quality: 70});
        }else if (fileFormat === 'png') {
            sh = sh.png({quality: 70 });
        }
    
        // write image to ouput folder
        sh.toFile(ouput_dir + "/" + file, function (err, info) {
            console.log(info);
            if (err) {
                console.log(err);
                return;
            }
        })
    })

}

module.exports = {optimizeImgs}

// export default optimizeImgs;



