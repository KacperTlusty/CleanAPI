"use strict";

var _movie = _interopRequireDefault(require("../../test/movie"));

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('movie', () => {
  describe('should validate properties', () => {
    test('must have a title', () => {
      const movie = (0, _movie.default)({
        title: null
      });
      expect(() => (0, _.default)(movie)).toThrow('Movie must have a title.');
    });
    test('must have a year', () => {
      const movie = (0, _movie.default)({
        year: null
      });
      expect(() => (0, _.default)(movie)).toThrow('Movie must have a year.');
    });
    test('must be rated', () => {
      const movie = (0, _movie.default)({
        rated: null
      });
      expect(() => (0, _.default)(movie)).toThrow('Movie must be rated.');
    });
    test('can have a release date', () => {
      const movie = (0, _movie.default)({
        released: null
      });
      expect(() => (0, _.default)(movie)).not.toThrow('Movie must have a release date.');
    });
    test('must have director', () => {
      const movie = (0, _movie.default)({
        director: null
      });
      expect(() => (0, _.default)(movie)).toThrow('Movie must have a director.');
    });
    describe('should return properties', () => {
      test('should allow to get title', () => {
        const movie = (0, _movie.default)({
          title: 'fake title'
        });
        expect((0, _.default)(movie).getTitle()).toBe('fake title');
      });
      test('should allow to get year', () => {
        const movie = (0, _movie.default)({
          year: 2000
        });
        expect((0, _.default)(movie).getYear()).toBe(2000);
      });
      test('should allow to get rate', () => {
        const movie = (0, _movie.default)({
          rated: 'R'
        });
        expect((0, _.default)(movie).getRated()).toBe('R');
      });
      test('should allow to get director', () => {
        const movie = (0, _movie.default)({
          director: 'Foo Bar'
        });
        expect((0, _.default)(movie).getDirector()).toBe('Foo Bar');
      });
      test('should allow to get release date', () => {
        const movie = (0, _movie.default)({
          released: '08 Sep 2017'
        });
        expect((0, _.default)(movie).getReleased()).toBe('08 Sep 2017');
      });
    });
  });
});