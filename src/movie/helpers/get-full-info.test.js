import axios from 'axios'
import getFullInfo from './get-full-info'

jest.mock('axios')

describe('getFullInfo helper function', () => {
  describe('successful fetch', () => {
    test('', async () => {
      axios.get.mockResolvedValue({
        data: {
          Lang: 'En',
          Fake: 'title'
        }
      })

      const response = await getFullInfo('fake title')
      expect(response).toEqual({ lang: 'En', fake: 'title' })
    })
  })
})
