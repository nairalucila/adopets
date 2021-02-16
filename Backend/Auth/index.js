const express = require('express')
const app = express()
const port = 3000

//router configuration
app.use(require('./routers/index'));

//midleware

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})