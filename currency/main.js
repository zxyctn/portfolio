function formatDate(date) {
    var day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();

    if (day < 10)
        day = '0' + day;

    if (month < 10)
        month = '0' + month;

    return year + '-' + month + '-' + day;
}

function getRates() {
    var table = document.getElementById('currencyTable');
    table.innerHTML = '';

    $.get(url, { base: 'USD', symbols: this.symbols, start_at: startDate, end_at: endDate }, function (data, status) {
        Object.keys(data.rates).sort().forEach(function(key) {
            currencyData[key] = data.rates[key];
        });
    }).done(function() {
        s = '<thead><tr><th scope="row">Date</th><td>TRY</td></tr></thead><tbody>';
        inner = '';
        for (var i in currencyData)
            inner += '<tr><th scope="row">' + i + '</th><td>' + currencyData[i]['TRY'] + '</td></tr>';
        s += inner + '</tbody></table>';
    }).done(function() {
        table.innerHTML = s;
    });
}

var symbols = 'TRY',
    base = 'USD',
    endDate = formatDate(new Date()),
    startDate = new Date(),
    currencyData = {},
    url = ' https://api.exchangeratesapi.io/history/';

startDate.setDate(startDate.getDate() - 10);
startDate = formatDate(startDate);

var updateButton = document.getElementById('updateTable');

updateButton.addEventListener('click', function() {
    getRates();
});

$(document).ready(function update() {
    getRates();
    setTimeout(update, 60000);
});