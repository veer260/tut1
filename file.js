const gun = () => {
    console.log('promise started');
    return new Promise(function (resolve, reject) {
        console.log('inside promise');
        setTimeout(() => {
            console.log('timer ended')
        }, 2000);
    })
}

let x = fetch('./list.json')
x.then((response) => {
    return response.json();
}).then((value) => {
    console.log(value);
})