const obj = require("./categories").categories;
const fs = require("fs");

let res = {};
let jsonflat = [];

function flatJsonInBigCategories() {
  for (const category_name in obj) {
    const element = obj[category_name];
    res[category_name] = [];

    if (category_name === "culture") {
      for (item of element) {
        res[category_name].push({ id: item.id, name: item.name });
        if (item.categories.length > 0) {
          for (subitem of item.categories) {
            res[category_name].push({ id: subitem.id, name: subitem.name });
            if (subitem.categories.length > 0) {
              for (subsub of subitem.categories) {
                res[category_name].push({ id: subsub.id, name: subsub.name });
              }
            }
          }
        }
      }
    } else {
      res[category_name].push({ id: element.id, name: element.name });
      if (element.categories.length > 0) {
        for (subitem of element.categories) {
          res[category_name].push({ id: subitem.id, name: subitem.name });
          if (subitem.categories.length > 0) {
            for (subsub of subitem.categories) {
              res[category_name].push({ id: subsub.id, name: subsub.name });
            }
          }
        }
      }
    }
  }
}

function flatJsonSameLevel() {
  for (const category_name in obj) {
    const element = obj[category_name];

    if (category_name === "culture") {
      for (item of element) {
        jsonflat.push({ id: item.id, name: item.name });
        if (item.categories.length > 0) {
          for (subitem of item.categories) {
            jsonflat.push({ id: subitem.id, name: subitem.name });
            if (subitem.categories.length > 0) {
              for (subsub of subitem.categories) {
                jsonflat.push({ id: subsub.id, name: subsub.name });
              }
            }
          }
        }
      }
    } else {
      jsonflat.push({ id: element.id, name: element.name });
      if (element.categories.length > 0) {
        for (subitem of element.categories) {
          jsonflat.push({ id: subitem.id, name: subitem.name });
          if (subitem.categories.length > 0) {
            for (subsub of subitem.categories) {
              jsonflat.push({ id: subsub.id, name: subsub.name });
            }
          }
        }
      }
    }
  }
}

flatJsonInBigCategories();
flatJsonSameLevel();

fs.writeFileSync("res.json", JSON.stringify(res));
fs.writeFileSync("flat.json", JSON.stringify(jsonflat));
