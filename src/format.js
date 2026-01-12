const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

export default function formatAdded(obj = new Date()) {
    const day = obj.getUTCDate() + 1
    const month = months[obj.getUTCMonth()]
    const year = obj.getFullYear()
    return `${month} ${day < 10 ? '0' + day : day} ${year}`
}