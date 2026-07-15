const totalSpend = 1100000;
let discount = 0;
let discountPercentage = "";

if (totalSpend >= 500000 && totalSpend <= 1000000) {
  discount = 0.05 * totalSpend;
  discountPercentage = "5%";
} else if (totalSpend > 1000000) {
  discount = 0.1 * totalSpend;
  discountPercentage = "10%";
} else {
  discountPercentage = "0%";
}

console.log(discountPercentage);
console.log("Total diskon =", discount);
