import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const port = 3001

app.listen(port, () => {
    console.log(`Crazy Card Express app listening at http://localhost:${port}`)
})

app.post('/search/cards', () => {} )