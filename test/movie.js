import faker from 'faker'
import cuid from 'cuid'

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
})

/**
 * Creates fake movie object with default values to for testing.
 * @param {Object} properties Object containing new properties to override defaults.
 * @returns {Object}
 */
export default function makeFakeMovie (properties) {
  const movie = {
    title: faker.lorem.paragraph(3),
    year: faker.date.past().getFullYear(),
    rated: faker.random.arrayElement(['3+', '7+', '12+', '16+', 'R']),
    released: faker.date.past(1),
    runtime: `${faker.random.number(300)} min`,
    director: `${faker.name.firstName()} ${faker.name.lastName()}`,
    id: Id.makeId()
  }

  return { ...movie, ...properties }
}
