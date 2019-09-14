"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDb = makeDb;
exports.default = void 0;

var _mongodb = require("mongodb");

var _dataAccess = _interopRequireDefault(require("./data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const url = process && process.env && process.env.COMMENTS_DB_URL || "mongodb://localhost:27017";
const dbName = process && process.env && process.env.COMMENTS_DB_NAME || "comments_api";
const client = new _mongodb.MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }

  return client.db(dbName);
}

const commentsDb = (0, _dataAccess.default)({
  makeDb
});
var _default = commentsDb;
exports.default = _default;