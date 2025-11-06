// Bài 1
for (let i = 0; i < 3; i++){
    setTimeout(function() {
        console.log(i);
    }, 100);
}

// Bài 2
const student = {
    name: "Huyền",
    age: 19,
};
student.grade = "A ";
student.age = "21";
console.log(student);


//2. Template Literals

// // vd minh họa
// // String interpolation
// const name = "Tuấnpt";
// const age = 19;
// console.log(`Xin chào, tôi là ${name}, năm nay ${age} tuổi.`);

// // Multi-line strings
// const message = `Đây là dòng đầu tiên
// Đây là dòng thứ hai
// Và đây là dòng thứ ba`;

// // Biểu thức trong template literals
// const a = 5;
// const b = 10;
// console.log(`Tổng của ${a} và ${b} là ${a + b}`);

// // Gọi hàm trong template literals
// function getCurrentTime() {
//   return new Date().toLocaleTimeString();
// }
// console.log(`Bây giờ là: ${getCurrentTime()}`);


///////Bài 1
// const user = {
//     firstName: "Nguyen",
//     lastName: "Van B",
//     product: "IP17",
//     price: "30000000",
//     orderDate: "2025-10-30", 
// };
// const emailTemplate = `
// Xin chào ${user.firstName} ${user.lastName},

// Cảm ơn bạn đã đặt mua sản phẩm: ${user.product}.
// Giá trị đơn hàng: ${user.price.toLocaleString("vi-VN")} VND.
// Ngày đặt hàng: ${user.orderDate}.

// Chúng tôi sẽ liên hệ sớm để xác nhận và giao hàng trong thời gian sớm nhất.

// Trân trọng,
// Đội ngũ Hỗ trợ Khách hàng
//  `;

// console.log(emailTemplate);

//// Bài 2
// const product = {
//     name: "IP15",
//     price: 20000000,
//     discount: 10,
//     inStock: true,
// };

// const finalPrice = product.price * (1- product.discount /100);

// const productCard = `

//     ${product.name}
//     Giá gốc: ${product.price.toLocaleString("vi-VN")} VND
//     Giảm giá: ${product.discount}%
//     Giá sau giảm: ${finalPrice.toLocaleString("vi-VN")} VND
//     Tình trạng:
//     ${product.inStock ? "Còn hàng" : "Hết hàng"}
   
// `;

// console.log(productCard);

// 3. Enhanced Object Literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
    width,
    height,
    color,
    calculateArea(){
        return this.width * this.height;
    },
    describe() {
        return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
    },
};

///Bai 2
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config
const config = {
  // 1️ Key động dạng `api_production_v2`
  [`api_${env}_${version}`]: "https://api.example.com",

  // 2️ Tạo key động cho từng feature
  ...features.reduce((obj, feature) => {
    obj[`feature_${feature}`] = true;
    return obj;
  }, {}),

  // 3️ Method động: getProductionConfig()
  [`get${env.charAt(0).toUpperCase() + env.slice(1)}Config`]() {
    return `Đang lấy cấu hình cho môi trường ${env} (${version})`;
  },
};

console.log(config);
console.log(config.api_production_v2); // "https://api.example.com"
console.log(config.feature_auth); // true
console.log(config.getProductionConfig()); // "Đang lấy cấu hình cho môi trường production (v2)"
