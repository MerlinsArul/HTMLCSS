function Print() {
  const user = document.getElementById("uname").value;
  const login = document.getElementById("pass").value;
  if (login == "Merlins") {
    alert("You have logged in Successfully")
  }
  else {
    alert("You entered Wrong Password")
  }
}