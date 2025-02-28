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
    expect(mdLinks.readFileMd('.md')).toBe(true);
  });
});

describe('findLinksMd', () => {

  it('should return true if find the links', () => {
    expect(mdLinks.findLinksMd('.md')).toBe(true);
  });
});

describe('validateLinks', () => {

  it('should validateLinks as function', () => {
    expect(typeof mdLinks.validateLinks).toEqual('function');
  });
});

describe('statsLinks', () => {

  it('should statsLinks as function', () => {
    expect(typeof mdLinks.statsLinks).toEqual('function');
  });
});

