// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import "bootstrap";

// alert("Hello World!")
// This will create an obnoxious alert
document.getElementById("Function").addEventListener("click", displayMessage);

function displayMessage() {
    var Input = document.getElementById("NameField").value;
    alert(Input);
    }
   