var usernames = ['Hamid1999','Mooojn',"Zain12","Fajar32"]
var passwords = ["1234","1234","1234","1234"]
var found = false;
function login() {
    var email = document.getElementById('Loginemail').value;
    var password = document.getElementById('Loginpass').value;

    for (var i = 0; i < usernames.length; i++) {
        if (email == usernames[i] && password == passwords[i]) {
            found = true;
            alert('You are logged in ' + email);
            myFunc();
            break;
        }
    }
    if (!found){
        alert('Incorrect username or password');
    }
}

function signup(){
    var email = document.getElementById('Loginemail').value;
    var password = document.getElementById('Loginpass').value;
    var password2 = document.getElementById('Loginpass2').value;

    if(password == password2){
        usernames.push(email);
        passwords.push(password);
        alert('You are signed up ' + email);
        myFunc();
    }
    else{
        alert('Passwords do not match');
    }
}
function myFunc(){
    window.location.href = "./index.html";
}