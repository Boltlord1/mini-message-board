import path from 'node:path'
import express from 'express'
import messageController from './controllers/messages.js'
import { user, mess } from './controllers/validation.js'

const __dirname = import.meta.dirname
const assetsPath = path.join(__dirname, '/public/')
const app = express()

app.set('views', path.join(__dirname, '/views/'))
app.set('view engine', 'ejs')
app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }))

app.get('/', messageController.indexGet)
app.get('/new', messageController.newGet) 
app.get('/messages/:id', messageController.messageGet)
app.post('/new', user, mess, messageController.newPost)

app.use((req, res, next) => {
    res.status(404).render('404')
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`App listening on ${port}`)
})