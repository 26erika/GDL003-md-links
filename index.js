const path = require('path');
const fs = require('fs');

const checkMd = (filePath) => {
    if (path.extname(filePath) === '.md') {
        return true
    } else {
        return false
    }
};

const readFileMd = () => {
    fs.readFile('README.md', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    return true;
};
  
const findLinksMd = () => {
    let expectLink = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
    fs.readFile('README.md', 'utf8', (err, data) => {
    let allLinks = data.match(expectLink)
        console.log(allLinks);
    });
    return true
};
findLinksMd();
module.exports = {
    checkMd,
    readFileMd,
    findLinksMd
};