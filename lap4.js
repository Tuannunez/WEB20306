// const colors = ["red", "green", "blue"];

// // const red = colors[0];

// const [red, green, blue, yellow] = colors;

// console.log(red, green,blue, yellow);
// const numbers = [1, 2, 3, 4, 5];

// const [, second, , four] = numbers;
// console.log(second, four);

// Callback cơ bản
// function fetchData(callback){
//     setTimeout(() => {
//         const data = { id: 1, name: "Tuán"};
//         callback(null, data);
//     }, 1000);
//     callback("loi khong data", null);
// }

// Bài tập Array Destructuring
// Bài 1
function getFirsLast(array){
  const lfc = array[1]
  array[1] = array[3]
  array[3] = lfc
  return array
}
console.log(getFirsLast([1,2,3,4,5]));
// Bài 2 
function swapElementd(array){
    const lfc = 
}


// Bài tập Object Destructuring
// Bài 1
const user = {
  id: 1,
  personalInfo: {
    name: "Vợ anh",
    contact: {
      email: "Voanh@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const { personalInfo: {name, contact: {email}}} = user;
  return {name, email};
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }