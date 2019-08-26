const path = require('path');
const fs = require('fs');
const userPath = (process.argv[2]);
const fetch = require('node-fetch');
let statusLinks;

const checkMd = (filePath) => {
    if (path.extname(filePath) === '.md') {
        return true
    } else {
        return false
    }
};

const readFileMd = () => {
    fs.readFile(userPath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    return true;
};

const findLinksMd = () => {
    let expectLink = /https?:\S+\w/g;
    fs.readFile(userPath, 'utf8', (err, data) => {
    let allLinks = data.match(expectLink);
        console.log(allLinks);
    });
    return true
};
findLinksMd();

const validateLinks = () => {
  fs.readFile(userPath, 'utf8', (err, data) => {
    statusLinks = data.match(/https?:\S+\w/g);
        //console.log(statusLinks);
  for (let i = 0; i < statusLinks.length; i++) {
  fetch(statusLinks[i]).then((response) => {
    if (response.status === 200){
      console.log(`File: ${userPath}\n Link: ${statusLinks[i]} Response code: ${response.status}\n :)`);
    }
    return response
  }).then((response) => {
    if (response.status === 404){
      console.log(`File: ${userPath}\n Link: ${statusLinks[i]} Response code: ${response.status}\n :(`);
    }
    return response
  }).catch((error) => {
    console.log('There was a problem with the Fetch request:' + error.message)
  })
}
});
};
validateLinks();
module.exports = {
    checkMd,
    readFileMd,
    findLinksMd,
    validateLinks
};