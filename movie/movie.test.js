import makeFakeMovie from '../test/movie'
import makeMovie from './'

describe('movie', () => {
  describe('should validate properties', () => {
    test('must have a title', () => {
      const movie = makeFakeMovie({ title: null })
      expect(() => makeMovie(movie)).toThrow('Movie must have a title.')
    })
    test('must have a year', () => {
      const movie = makeFakeMovie({ year: null })
      expect(() => makeMovie(movie)).toThrow('Movie must have a year.')
    })
    test('must be rated', () => {
      const movie = makeFakeMovie({ rated: null })
      expect(() => makeMovie(movie)).toThrow('Movie must be rated.')
    })
    test('can have a release date', () => {
      const movie = makeFakeMovie({ released: null })
      expect(() => makeMovie(movie)).not.toThrow('Movie must have a release date.')
    })
    test('must have director', () => {
      const movie = makeFakeMovie({ director: null })
      expect(() => makeMovie(movie)).toThrow('Movie must have a director.')
    })
    describe('should return properties', () => {
      test('should allow to get title', () => {
        const movie = makeFakeMovie({ title: 'fake title' })
        expect(makeMovie(movie).getTitle()).toBe('fake title')
      })
      test('should allow to get year', () => {
        const movie = makeFakeMovie({ year: 2000 })
        expect(makeMovie(movie).getYear()).toBe(2000)
      })
      test('should allow to get rate', () => {
        const movie = makeFakeMovie({ rated: 'R' })
        expect(makeMovie(movie).getRated()).toBe('R')
      })
      test('should allow to get director', () => {
        const movie = makeFakeMovie({ director: 'Foo Bar' })
        expect(makeMovie(movie).getDirector()).toBe('Foo Bar')
      })
      test('should allow to get release date', () => {
        const movie = makeFakeMovie({ released: '08 Sep 2017' })
        expect(makeMovie(movie).getReleased()).toBe('08 Sep 2017')
      })
    })
  })
})
