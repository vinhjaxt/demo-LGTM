
const express = require('express')
const { exec } = require('child_process')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  exec('ls '+req.query.file, (err, stdout, stderr) => {
    if (err) {
      res.send('Error')
      return
    }
    res.send('OK')
  })
})

app.listen(port, () => {
  console.log(`App listening on port`, port)
})
