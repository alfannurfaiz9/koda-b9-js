const pembelian = 1100000;
let diskon = 0;

if (pembelian >= 500000 && pembelian <= 1000000) {
  diskon = 0.05 * pembelian;
  console.log("Diskon 5%");
  console.log("Total diskon =", diskon);
} else if (pembelian > 1000000) {
  diskon = 0.1 * pembelian;
  console.log("Diskon 10%");
  console.log("Total diskon =", diskon);
} else {
  console.log("Diskon 0%");
  console.log("Total diskon =", diskon);
}
