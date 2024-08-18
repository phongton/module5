let arr = [1, 4, 6, 2, 6];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for(let i in arr) {
//     console.log(arr[i]);
// }
//
// for(let item of arr) {
//     console.log(item);
// }

// Cú pháp trước ES6
// arr.forEach(function (value, index) {
//     console.log(value);
// })
//
// // Sau ES6
// arr.forEach((value, index) => {
//     console.log(value);
// })

// Gấp đôi các phần tử trong mảng và trả về mảng mới.
const newArr = arr.map((value, index) => value * 2);
console.log(newArr)

// Gấp đôi các phần tử ở vị trí lẻ.
const newArr2 = arr.map((value, index) => index % 2 !== 0 ? value * 2 : value);

console.log(newArr2)

// Lọc => filter
const newArr3 = arr.filter((value, index) => index % 2 !== 0);
console.log(newArr3)

// Reduce: dùng cho trường hợp có biến tích lũy qua từng vòng lặp.
const sum = arr.reduce((temp, currentValue) => temp + currentValue);
console.log(sum);

// Tìm số lớn nhất
const max = arr.reduce((temp, currentValue) => temp < currentValue ? currentValue : temp)
console.log(max)
