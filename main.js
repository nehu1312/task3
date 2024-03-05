document.write('<h4>write javascript program that takes a no as input and prints whether no is positive negative or zero</h4>');

function checkNumber(n){
if(n>0){
    document.write(`number is:positive<br>`);
}
else if(n<0){
    document.write(`number is:negative<br>`);

}
else{
    document.write(`number is:zero<br>`);

}
}
checkNumber(5);
checkNumber(-5);
checkNumber(0);