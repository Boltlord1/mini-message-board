import path from 'node:path'
import express from 'express'
import { messages } from './data.js'
import formatTime from './formatTime.js'

const __dirname = import.meta.dirname
const assetsPath = path.join(__dirname, '/public/')
const app = express()

app.set('views', path.join(__dirname, '/views/'))
app.set('view engine', 'ejs')
app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.render('index', { messages: messages }))
app.get('/new', (req, res) => res.render('new'))
app.get('/messages', (req, res) => res.render('index', { messages: messages }))
app.get('/messages/:id', (req, res) => {
    const id = Math.trunc(Number(req.params.id))
    if (id === NaN || id < 0 || id >= messages.length) res.render('invalid')
    else res.render('message', { message: messages[id] })
})

app.post('/new', (req, res) => {
    const { user, mess } = req.body
    messages.push({ text: mess, user: user, added: formatTime() })
    res.redirect('/')
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`App listening on ${port}`)
})