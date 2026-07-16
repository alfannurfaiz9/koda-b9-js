const scores = {
  matematika: 80,
  bahasa_inggris: 60,
  bahasa_indonesia: 70,
  ipa: 90,
};

const sumAndAverageScores = ({
  matematika,
  bahasa_inggris,
  bahasa_indonesia,
  ipa,
}) => {
  const total = matematika + bahasa_inggris + bahasa_indonesia + ipa;
  const average = total / 4;

  return `Total nilai adalah: ${total}, \nRata rata nilai adalah: ${average}`;
};

console.log(sumAndAverageScores(scores));
