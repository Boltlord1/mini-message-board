import formatTime from './formatTime.js'

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: formatTime()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: formatTime()
    }
]

export { messages }