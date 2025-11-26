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

// Bài tập:1.Array Destructuring
// Bài 1.1
function getFirsLast(array){
  const lfc = array[1]
  array[1] = array[3]
  array[3] = lfc
  return array
}
console.log(getFirsLast([1,2,3,4,5]));
// Bài 2.1

function swapElements(arr) {
    // Your code here
    const lfc = arr[1]
    arr[1] = arr[3]
    arr[3] = lfc
    return arr
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]


// Bài tập: 2.Object Destructuring
// Bài 1.2
const user = {
  id: 1,
  personalInfo: {
    name: "Hết phim",
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

//Bài tập: 3.Promises
// bài 1.3
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("2 seconds passed"));

// bài 2.3
function fetchMultipleData(urls) {
  return Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );  
}

fetchMultipleData(["/api/lfc/1", "/api/sou/2"])
  .then((users) => console.log(users))
  .catch((err) => console.error("Lỗi:", err));


// Bài tập: 4.Async/Await
// bài 1.4
//// Viết lại hàm này sử dụng async/await
//function processOrder(orderId, callback) {
  // getOrder(orderId, (order) => {
  //   getUser(order.userId, (user) => {
  //     getProducts(order.productIds, (products) => {
  //       callback({ order, user, products });
  //     });
  //   });
  // });
//}
async function processOrder(orderId){
  const order = await getOrder(orderId);
  const user = await getUserInfo(order.userId);
  const products = await getProducts(order.productIds);
  return { order, user, products };
}

//bài 2.4
//  async function safeApiCall(apiFunction, ...args) {
  // Your code here
// }

async function  safeApiCall(apiFunction, ...args) {
  try{
    const result = await apiFunction(...args);
    return {data: result, console, error: null};
  } catch (error){
    return {data: null, error: error.message || error};
  }
}