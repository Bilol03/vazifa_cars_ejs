import fs from 'fs'

let getData = (filename) => {
  let datas = JSON.parse(fs.readFileSync(`./config/${filename}.json`, "utf8"));
  return datas;
};

export { getData };