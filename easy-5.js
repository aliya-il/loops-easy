var num = parseInt(prompt('Enter a number'))
var sum = 0;

while (num){
part = num%10;
num = (num - part)/10;
sum = sum + part;
}

document.write(sum)
