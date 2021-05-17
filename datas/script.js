function Data(){
var data = new Date();
console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
}
function mostrarData(){
    setInterval(Data, 1000);
}