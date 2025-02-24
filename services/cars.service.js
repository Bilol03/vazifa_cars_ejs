import fs from 'fs'

let getData = (filename) => {
  let datas = fs.readFileSync(`./config/${filename}.json`, "utf8")
  return datas ? JSON.parse(datas) : [];
};

export { getData };