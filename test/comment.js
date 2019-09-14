import faker from 'faker'
import cuid from 'cuid'

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
})

/**
 * Creates fake comment object with default values for testing.
 * @param {Object} properties Properties to override default ones.
 */
export default function makeFakeComment (properties) {
  const comment = {
    author: faker.name.firstName() + faker.name.lastName(),
    text: faker.lorem.sentences(5),
    id: Id.makeId(),
    date: Date.now()
  }

  return { ...comment, ...properties }
}
