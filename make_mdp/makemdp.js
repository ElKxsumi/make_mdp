var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/saves.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


readline.question("How much characters ?", howmuch => {
function makeid(lenght){
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.&é'(-è_çà)=";
    var charactersLenght = characters.length;
    for ( var i = 0; i < lenght; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    characters.length));
}
return result;
}
console.log(makeid(howmuch));
readline.close();
})
