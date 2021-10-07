function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="user")
    {
        alert("login succesfully");

        // On successfull login it will redirect to Home page
        window.location="/Home/home.html";
        return false
    }
    else{
        alert("login failed");
    }
}