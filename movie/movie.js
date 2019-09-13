/**
 *
 */
export default function buildMakeMovie () {
  return function makeMovie ({
    director,
    rated,
    released,
    title,
    year
  }) {
    if (!title) {
      throw new Error('Movie must have a title.')
    }

    if (!year) {
      throw new Error('Movie must have a year.')
    }

    if (!rated) {
      throw new Error('Movie must be rated.')
    }

    if (!director) {
      throw new Error('Movie must have a director.')
    }

    return Object.freeze({
      getDirector: () => director,
      getRated: () => rated,
      getYear: () => year,
      getTitle: () => title,
      getReleased: () => released
    })
  }
}
