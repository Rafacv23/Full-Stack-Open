const getDate = () => {
    const actualDate = new Date();
    const hours = actualDate.getHours();
    const minutes = actualDate.getMinutes();
    const seconds = actualDate.getSeconds();
    const year = actualDate.getFullYear()
    const dayNumber = actualDate.getDate()

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = daysOfWeek[actualDate.getDay()];
    const month = monthsOfYear[actualDate.getMonth()];

    const timezoneOffset = actualDate.getTimezoneOffset();
    const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffset) / 60);
    const timezoneOffsetMinutes = Math.abs(timezoneOffset) % 60;
    const timezoneSign = timezoneOffset > 0 ? '-' : '+';

    const timezone = `UTC${timezoneSign}${timezoneOffsetHours.toString().padStart(2, '0')}:${timezoneOffsetMinutes.toString().padStart(2, '0')}`;

    return (`${day} ${month} ${dayNumber} ${year} ${hours}:${minutes}:${seconds} ${timezone}`)
}

module.exports = getDate