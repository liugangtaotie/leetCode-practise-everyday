/**
 * 根据路由自动生成pages.json
 * 使用方式：项目目录运行yarn g
 */
const fs = require("fs");
const path = require("path");

const routes = require("./src/route/index.ts");
const pagesFile = path.resolve("./src/pages.json");

fs.readFile(pagesFile, "utf-8", function (err, data) {
  if (err) {
    return console.log("==========读取文件失败");
  }

  console.log("==========1、读取路由成功！");

  const objectPages = JSON.parse(data);

  /**
   *计算、生成分包
   *最多3个分包
   *
   */
  let subPackages = [];
  let allRoots = {};

  routes.forEach((v, i) => {
    if (v.isSubPackage) {
      const obj = {
        path: v.path,
        style: v.style,
      };
      if (allRoots[v.subPackageRoot]) {
        allRoots[v.subPackageRoot].push(obj);
      } else {
        allRoots[v.subPackageRoot] = [obj];
      }
    }
  });

  console.log("allRoots", allRoots);

  for (let key in allRoots) {
    subPackages.push({
      root: key,
      pages: allRoots[key],
    });
  }

  // 超过3个分包，退出构建
  if (subPackages.length > 3) {
    console.log(`==========生成分包数量不能超过3个！！`);
    console.log(`==========当前生成${subPackages.length}个，请检查！！`);
    return process.exit();
  }

  objectPages.pages = routes.filter((v) => !v.isSubPackage);
  objectPages.subPackages = subPackages;

  const str = JSON.stringify(objectPages, null, "\t");

  fs.writeFile(pagesFile, str, function (err2, data) {
    if (err2) {
      return console.log("==========写入文件失败");
    }
    console.log("==========2、写入pages.json成功！");

    if (subPackages.length > 0) {
      console.log(`==========3、生成${subPackages.length}个子包成功`);
    }
  });
});
