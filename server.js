// import { fromPath } from "pdf2pic";
let fromPath = require("pdf2pic").fromPath;
const options = {
  density: 100,
  saveFilename: "untitled",
  savePath: "./images",
  format: "png",
  width: 600,
  height: 600
};
const storeAsImage = fromPath("Onsite Conduct Rules Annual 2018 (Need to Fill).pdf", options);
const pageToConvertAsImage = 1;
 
storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");
 
  return resolve;
});
 