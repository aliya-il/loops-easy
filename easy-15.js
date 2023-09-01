let arr = [5,-8,10,-3,9,-26,29];

for(i=0; i < arr.length; i++) {
  if(arr[i] < 0) {
    removed = arr.splice(i,1)
  }
}
console.log(arr)