import { validationResult, matchedData } from 'express-validator'
import queries from '../database/queries.js'
import formatAdded from '../format.js'

async function indexGet(req, res) {
    const messages = await queries.getAllMessages()
    res.render('index', { messages: messages, format: formatAdded })
}

async function messageGet(req, res) {
    const id = Number(req.params.id)
    if (id === NaN || !Number.isInteger(id) || id < 0) {
        res.render('invalid')
        return
    }
    const obj = await queries.getMessageById(id)
    if (obj === undefined) {
        res.render('invalid')
        return
    }
    res.render('message', { message: obj, format: formatAdded })
}

async function newGet(req, res) {
    res.render('new')
}

async function newPost(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).render('invalid')
        return
    }
    const { user, mess } = matchedData(req)
    await queries.insertMessage(user, mess)
    res.redirect('/')
}

export default {
    indexGet,
    messageGet,
    newGet,
    newPost
}