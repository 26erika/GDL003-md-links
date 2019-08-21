const mdLinks = require('../index.js');


describe('checkMd', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks.checkMd("../README.md")).toBe (true);
  });
  it('should return false for a invalid .md file', () => {
    expect(mdLinks.checkMd("../index.js")).toBe (false);
  });
});

describe('readFileMd', () => {

  it('should return true for read .md file', () => {
    expect(mdLinks.readFileMd('README.md')).toBe ("https://"|"https://");
  });
});