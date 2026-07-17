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
      const asciiCode = Array.from(email).map((char) => char.charCodeAt(0));

      asciiCode[0] = asciiCode[0] + 32;

      const lowerText = String.fromCharCode(...asciiCode);

      emails.push(lowerText);
    });
  } catch (error) {
    console.log(error);
  }

  console.log(emails);
  return emails;
};

getEmailAsyncAwait();
