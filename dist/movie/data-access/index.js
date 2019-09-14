"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDb = makeDb;
exports.default = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

var _dataAccess = _interopRequireDefault(require("./data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MongoClient = _mongodb.default.MongoClient;
const url = process && process.env && process.env.MOVIES_DB_URL || "mongodb://localhost:27017";
const dbName = process && process.env && process.env.MOVIES_DB_NAME || "movies_api";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }

  return client.db(dbName);
}

const moviesDb = (0, _dataAccess.default)({
  makeDb
});
var _default = moviesDb;
exports.default = _default;