"use strict";
const common_vendor = require("../common/vendor.js");
function request(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
  url: "https://springboot-2133907-1394126627.sh.run.tcloudbase.com" + url,
      method,
      data,
      header: {
        "Authorization": "Bearer " + common_vendor.index.getStorageSync("token")
      },
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
