// let arr = [-5, 10, 8, 7, -11];
/// let negative = 0;
// let posiive = 0;

// for (var i = 0; i < arr.length; i++){
//     if (arr[i] < 0){
//         negative = negative + 1;
//     } else{
//         positive = positive + 1;
//     }
// }

    let arr = [4, -3, -2, 6, 7];
    let countP = 0;
    let countN = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        countP++;
      } else if (arr[i] < 0) {
        countN++;
      }
    }
    if (countP == arr.length) {
      console.log('Все элементы массива положительные');
    } else if (countN <= arr.length) {
      console.log('Есть отрицательные элементы');
    }
  