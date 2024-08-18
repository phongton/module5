// const sum = (b, c, ...a) => {
//     console.log(a)
// }
//
// sum(1,2,3,4,54,6,7,8,8,4,7,6,5,5,45,4,4,4)
// sum(1,2,3)

//Sao chép và gộp mảng (ES6) và đối tượng (ES7)
// let a = [1,2,3];
// let c = [3,5,6]
// let b = [...a, ...c];
// console.log(a)
// console.log(b)
// console.log(a==b)

//Đối tượng
// const obj = {
//     id: 1,
//     name: "haiTT"
// }
// const obj2 = {
//     id: 2,
//     address: "Quảng Nam"
// }
//
// const obj1 = {...obj, ...obj2}
// console.log(obj1)

// Tách mảng (ES6), đối tượng (ES7)
const arr = [1,3,5,6];
const [a,b,...c] = arr;

const obj = {
    id: 1,
    name: "HaiTT"
}
let {id, name:nameStudent} = obj


