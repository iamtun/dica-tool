const fs = require('fs');

const writeFile = (file, item) => {
    try {
      file.write(`${item}\n`);
    } catch (error) {
      console.error("error in write file", error);
    }
};


const writeData = (output, images) => {
    const file = fs.createWriteStream(output);
    file.on("error", (err) => console.log({ err }));
    for(let image of images) {
        writeFile(file, image)
    }
    file.end();
    console.log('write data done!')
}

module.exports = {writeData};