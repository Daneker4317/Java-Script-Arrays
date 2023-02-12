function pageLoader(callback) {
    fetch("https://reqres.in/api/users?page=2").
        then(response => response.json()).
        then(response => callback(response));
}

function getInfo(data) {
    console.log('запрос отправлен');
    console.log('запрос принят');
    console.log(data);
}

pageLoader(getInfo);