let arr = [5,8,10,3,9,26,29];
countOdd = 0;
countEven = 0;

for(i=0; i < arr.length; i++) {
  if(arr[i]%2==0) {
    countEven++
  } else {
    countOdd++
  }
}
console.log(countEven)
console.log(countOdd)
