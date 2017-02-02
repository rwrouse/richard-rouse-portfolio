var userName = prompt("Hello, what is your name");
var output = document.querySelector('#greeting');

output.innerHTML = "<p>Thanks for visiting, " + userName + ".</p>";
