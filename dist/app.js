"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _controllers = require("./comment/controllers");

var _callback = _interopRequireDefault(require("./comment/callback"));

var _controllers2 = require("./movie/controllers");

var _callback2 = _interopRequireDefault(require("./movie/callback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.get('/movies', (0, _callback2.default)(_controllers2.getMovies));
app.post('/movies', (0, _callback2.default)(_controllers2.postMovie));
app.get('/comments', (0, _callback.default)(_controllers.getComments));
app.post('/comments', (0, _callback.default)(_controllers.postComments));
app.listen(process && process.env && process.env.PORT || undefined || 3000, () => {
  console.log('listening on port 3000');
});
var _default = app;
exports.default = _default;