const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const random = Math.round( Math.random() * 9 ) + 1
    res.send(`The random number of 1 to 10 is: ${random}`)
})

app.listen(port, () => console.log(`Api listen to ${port}`))