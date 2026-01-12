import pool from './pool.js'

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages')
    return rows
}

async function getMessageById(id) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE msg_id = $1', [id])
    return rows[0]
}

async function insertMessage(user, text) {
    const date = new Date()
    await pool.query('INSERT INTO messages(msg_user, msg_date, msg_text) VALUES ($1, $2, $3)', [user, date, text])
}

export default {
    getAllMessages,
    getMessageById,
    insertMessage
}