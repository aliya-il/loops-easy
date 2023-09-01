var num = parseInt(prompt('Enter a number'))

while(num) {
if (num % 3 == 0) {
    document.write(num + ' ')
    num--;
} else {
    num--;
}
}