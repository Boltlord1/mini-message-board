const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

export default function formatAdded(obj = new Date(), full = false) {
    const day = Number(obj.getDay()) + 1
    if (full === false) return `${months[Number(obj.getMonth())]} ${day < 10 ? '0' : ''}${day} ${obj.getFullYear()}`

    const time = [obj.getHours(), obj.getMinutes(), obj.getSeconds()].reduce((string, num) => {
        if (num < 10) return string += `0${num}:`
        return string += `${num}:`
    }, '').slice(0, -1)
    return `${time} - ${months[Number(obj.getMonth())]} ${day < 10 ? '0' : ''}${day} ${obj.getFullYear()}`
}