const payment = 150000;
const totalSpend = 100000;
let change = payment - totalSpend;

let fiftyThousand = 0;
let tenThousand = 0;
let fiveThousand = 0;
let twoThousand = 0;
let oneThousand = 0;

while (change > 0) {
  if (change >= 50000) {
    fiftyThousand += 1;
    change -= 50000;
  } else if (change >= 10000) {
    tenThousand += 1;
    change -= 10000;
  } else if (change >= 5000) {
    fiveThousand += 1;
    change -= 5000;
  } else if (change >= 2000) {
    twoThousand += 1;
    change -= 2000;
  } else {
    oneThousand += 1;
    change -= 1000;
  }
}

console.log(
  "Rp50.000: " + fiftyThousand + " lembar",
  "\nRp10.000: " + tenThousand + " lembar",
  "\nRp5.000: " + fiveThousand + " lembar",
  "\nRp2.000: " + twoThousand + " lembar",
  "\nRp1.000: " + oneThousand + " lembar",
);
