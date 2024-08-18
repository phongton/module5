// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
let arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = arr.filter(value =>value>5)
console.log(newArr)
// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
const newArr2 = arr.reduce((acc, cur) => acc+cur,0);
console.log(newArr2)
// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
const checkNumberInArr = (array, V) => {
    return array.includes(V) ? V : "không tìm thấy"
}
console.log(checkNumberInArr(arr, 6));
// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
const checkNumber = (element) => element > 0;
arr.every(checkNumber) === true ? console.log('Lớn hơn 0') : console.log('Không lớn hơn 0');

// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
const found = arr.find((element) => element > 3);
console.log(found !== undefined ? found : "Không có phần tử lớn hơn 3");
// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
const [first, ...rest] = arr
console.log(first);
console.log(rest);
// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const person = [{
    name: 'phong',
    age: 26
}, {
    name: 'ky',
    age: 26
}, {
    name: 'hieu',
    age: 24
}]
for (const {name, age} of person) {
    console.log(`Name: ${name}, Age: ${age}`);
}

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0)
}

console.log(sum(1, 2, 3));
// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
function string(...name) {
    return name.reduce((total, current) => `${total} , ${current}`)
}

console.log(`welcome ${string('phong', 'hieu', 'ky')}`);
// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về
const book = {
    title: 'ABC',
    author: 'phong',
    pages: 10,
    displayInfo: function () {
        console.log(`Sách: ${this.title}, tác giả: ${this.author}, số trang: ${this.pages}`);
    }
}

book.displayInfo()