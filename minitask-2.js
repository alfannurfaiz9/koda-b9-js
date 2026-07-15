const pembelian = 50000;
let diskon = 0;
let persentaseDiskon = "";

if (pembelian >= 500000 && pembelian <= 1000000) {
  diskon = 0.05 * pembelian;
  persentaseDiskon = "5%";
} else if (pembelian > 1000000) {
  diskon = 0.1 * pembelian;
  persentaseDiskon = "10%";
} else {
  persentaseDiskon = "0%";
}

console.log(persentaseDiskon);
console.log("Total diskon =", diskon);
