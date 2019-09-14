"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInfo;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getInfo(title) {
  return _axios.default.get(`${process && process.env && process.env.OMDB_API || "http://www.omdbapi.com/"}`, {
    params: {
      apikey: process && process.env && process.env.OMDB_APIKEY || "f746aff9",
      t: title
    }
  }).then(response => {
    return Object.entries(response.data).map(([key, val]) => [key.toLowerCase(), val]).reduce((obj, [k, v]) => ({ ...obj,
      [k]: v
    }), {});
  }, reject => {
    throw new Error(reject);
  });
}