setInterval(function() {

    function tiempo () {

let date = new Date();
let hora = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
    let time;

if (hora > 12) {
    hora= hora - 12;
    time= (`pm`)
} else {
    time= (`am`)
}

if(hora < 10){
    hora= (`0${hora}`);
}

if(min < 10){
    min= (`0${min}`);
}

if(sec < 10){
    sec= (`0${sec}`);
}
    
console.log(`${hora}:${min}:${sec} ${time}`)

}

    tiempo();
}, 1000);