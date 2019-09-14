module.exports = function makeCallback (controller) {
  return (req, res) => {
    const request = {
      body: req.body,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type')
      }
    }
    controller(request).then(response => {
      if (response.headers) {
        res.set(response.headers)
      }
      res.type('json')
      res.status(response.statusCode).send(response.body)
    })
      .catch(() => res.status(500).send({ error: 'Internal error.' }))
  }
}
