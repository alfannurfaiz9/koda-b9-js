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

getEmailThen();

const getEmailAsyncAwait = async () => {
  const emails = [];

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw "Error fetching data";
    }

    const datas = await response.json();

    datas.map((data) => {
      const email = data.email;
      const asciiCode = [];
      const newEmail = [];
      let lowerEmail = "";

      for (let i = 0; i < email.length; i++) {
        if (i === 0) {
          asciiCode[asciiCode.length] = email[i].charCodeAt(0) + 32;
        } else {
          asciiCode[asciiCode.length] = email[i].charCodeAt(0);
        }
      }

      for (let i = 0; i < asciiCode.length; i++) {
        newEmail.push(String.fromCharCode(asciiCode[i]));
      }

      newEmail.map((el) => (lowerEmail += el));

      emails.push(lowerEmail);
    });
  } catch (error) {
    console.log(error);
  }

  console.log(emails);
  return emails;
};

getEmailAsyncAwait();
