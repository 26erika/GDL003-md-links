const path = require('path');
const fs = require('fs');

const checkMd = (filePath) => {
  if (path.extname(filePath) === '.md'){
      return true 
  }else{
      return false
  }
      };
 
 const readFileMd = () => {
    fs.readFile('README.md','utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
      return "https://"|"https://"
 }



  module.exports = {
      checkMd,
      readFileMd
    }; 