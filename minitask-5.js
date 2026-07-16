const account = { id: 1, username: "budi", password: "budi123" };
const newPassword = "budi1";

if (newPassword.length >= 5) {
  const newAccount = { ...account, password: newPassword };
  console.log(newAccount);
} else {
  console.log("Password terlalu pendek");
}
