function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let category = "";
    if (bmi < 20) {
        category = "Thiếu cân";
    } else if (bmi < 40) {
        category = "Bình thường";
    } else if (bmi < 60) {
        category = "Thừa cân";
    } else {
        category = "Béo phì";
    }
    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${category}`;
}
console.log(calculateBMI(70, 1.78));


function createBook(title, author, year, price) {
    const discountKey = "calculateDiscount";

    return {
        title,
        author,
        year,
        price,

        getBookInfo() {
            return ` ${this.title} - ${this.author} (${this.year}) | Giá: ${this.price.toLocaleString()}đ`;
        },
        [discountKey](discountPercent) {
            const discountedPrice = this.price - (this.price * discountPercent) / 100;
            return ` Giá sau giảm ${discountPercent}%: ${discountedPrice.toLocaleString()}đ`;
        }
    };
}

const book = createBook("JavaScript ES6", "Tuan", 9999, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));