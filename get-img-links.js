const fs = require('fs');
const {writeData} = require('./utils/write-file.js');
// Read the data from the file (replace 'big_data.txt' with the actual file path)
const data = fs.readFileSync('./input/quizz_export_v1_05_08_23.txt', 'utf8');

// Regular expression to match links starting with "https://staging-docdn.giainhanh.io"
const linkPattern = /https:\/\/staging-docdn\.giainhanh\.io[^\s'"]+/g;
const links = data.match(linkPattern);

// Output the matched links
console.log(links);

writeData('./data/images-v2.txt', links)