const john = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("John");
      } else {
        reject("Error");
      }
    }, 1500);
  });
};

const ed = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("Ed");
      } else {
        reject("Error");
      }
    }, 2000);
  });
};

const jane = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("Jane");
      } else {
        reject("Error");
      }
    }, 500);
  });
};

john()
  .then((result) => {
    console.log(result);
    return ed();
  })
  .then((result) => {
    console.log(result);
    return jane();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

const printer = async () => {
  try {
    console.log(await john());
    console.log(await ed());
    console.log(await jane());
  } catch (error) {
    console.log(error);
  }
};

printer();
