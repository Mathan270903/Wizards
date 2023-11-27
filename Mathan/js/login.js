let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

if(email == 'admin@gmail.com') {
    let admin = document.getElementById("admin-page");
    admin.href = "/html/admin.html";
}

else {
    let admin = document.getElementById("admin-page");
    admin.href = "/html/index.html";
}