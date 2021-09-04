// 分包逻辑

module.exports = [
  {
    path: "pages/index/index",
    style: {
      "navigationBarTitleText": "leetCode"
    }
  },
  {
    path: "pages/person/index",
    style: {
      "navigationBarTitleText": "person"
    }
  },
  {
    path: "webview/webview",
    style: {},
    isSubPackage: true,
    subPackageRoot: "pages/packageA",
  },
  {
    path: "twoSum/twoSum",
    style: {},
    isSubPackage: true,
    subPackageRoot: "pages/packageA",
  },
];
