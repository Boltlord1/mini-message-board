export default function formatTime(date = new Date()) {
    const array = [date.getHours(), date.getMinutes(), date.getSeconds()]
    return array.reduce((string, num) => {
        if (num < 10) return string += `0${num}:`
        return string += `${num}:`
    }, '').slice(0, -1)
}