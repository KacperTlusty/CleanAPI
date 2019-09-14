"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _getFullInfo = _interopRequireDefault(require("./get-full-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('axios');
describe('getFullInfo helper function', () => {
  describe('successful fetch', () => {
    test('', async () => {
      _axios.default.get.mockResolvedValue({
        data: {
          Lang: 'En',
          Fake: 'title'
        }
      });

      const response = await (0, _getFullInfo.default)('fake title');
      expect(response).toEqual({
        lang: 'En',
        fake: 'title'
      });
    });
  });
});