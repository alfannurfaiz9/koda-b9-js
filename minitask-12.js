const getEmailThen = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => {
      if (!result.ok) {
        throw "Error fetching data";
      }
      return result.json();
    })
    .then((datas) => {
      const email = [];

      datas.map((data) => email.push(data.email.toLowerCase()));

      console.log(email);
      return email;
    })
    .catch((err) => {
      console.log(err);
    });
};

// getEmailThen();

const getEmailAsyncAwait = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw "Error fetching data";
    }

    const datas = await response.json();

    const newEmail = [];

    for (let i = 0; i < datas.length; i++) {
      let test = "";
      let stringFromAscii = "";

      test = datas[i].email;

      for (let j = 0; j < test.length; j++) {
        if (test.charCodeAt(j) >= 65 && test.charCodeAt(j) <= 96) {
          stringFromAscii += String.fromCharCode(test.charCodeAt(j) + 32);
        } else {
          stringFromAscii += test[j];
        }
      }

      newEmail.push(stringFromAscii);
    }

    console.log(newEmail);
    return newEmail;
  } catch (error) {
    console.log(error);
  }
};

getEmailAsyncAwait();
