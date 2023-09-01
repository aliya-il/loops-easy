let arr = [5,8,10,3,9, -10, -5, -25]
let min = arr[0]
for (i=0; i < arr.length; i++) {
  if (arr[i] < arr[0]){
  min = arr[i]
  }
}
console.log(min)
  