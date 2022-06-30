import express from 'express'
import cors from 'cors'
import { PostSearchAvailableCardsHandler } from './app/handlers/PostSearchAvailableCardsHandler'

const port = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.post('/search/cards', PostSearchAvailableCardsHandler)

app.listen(port, () => {
    console.log(`Crazy Card Express app listening at http://localhost:${port}`)
})