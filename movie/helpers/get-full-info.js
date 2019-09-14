import axios from 'axios'

export default async function getInfo (title) {
  console.log(process.env.OMDB_API)
  return axios.get(`${process.env.OMDB_API}`, {
    params: {
      apikey: process.env.OMDB_APIKEY,
      t: title
    }
  }).then(
    response => {
      return Object
        .entries(response.data)
        .map(([key, val]) => ([key.toLowerCase(), val]))
        .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {})
    },
    reject => { throw new Error(reject) })
}
