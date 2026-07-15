const totalBelanja = 150000;
const pembayaran = 200000;
let kembalian = pembayaran - totalBelanja;

let limaPuluhRibu = 0;
let sepuluhRibu = 0;
let limaRibu = 0;
let duaRibu = 0;
let seribu = 0;

while (kembalian > 0) {
  if (kembalian >= 50000) {
    limaPuluhRibu += 1;
    kembalian -= 50000;
  } else if (kembalian >= 10000) {
    sepuluhRibu += 1;
    kembalian -= 10000;
  } else if (kembalian >= 5000) {
    limaRibu += 1;
    kembalian -= 5000;
  } else if (kembalian >= 2000) {
    duaRibu += 1;
    kembalian -= 2000;
  } else {
    seribu += 1;
    kembalian -= 1000;
  }
}

console.log(
  "Rp50.000: " + limaPuluhRibu + " lembar",
  "Rp10.000: " + sepuluhRibu + " lembar",
  "Rp5.000: " + limaRibu + " lembar",
  "Rp2.000: " + duaRibu + " lembar",
  "Rp1.000: " + seribu + " lembar",
);
