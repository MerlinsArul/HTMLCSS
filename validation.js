var form = document.getElementById('form')
var user = document.getElementById('username')
var pass = document.getElementById('password')
var message = document.getElementById('message')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (user.value == "") {
        alert("Please enter username")
    }
    if (pass.value == "") {
        alert("Please enter password")
    }
    alert("Form is Submitted Successfully")
})