const showWatch = () => {
    let date = new Date();
    let hr = format(date.getHours());
    let min = format(date.getMinutes());
    let seg = format(date.getSeconds());
    document.getElementById('hours').innerHTML = `${hr}:${min}:${seg}`;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let day = date.getDate();
    let dayWeek = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateText = `${dayWeek}, ${day} ${month} ${year}`
    document.getElementById('date').innerHTML = dateText;

    document.getElementById('container').classList.toggle('anime');

}

const format = (number) => {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

setInterval(showWatch, 1000);