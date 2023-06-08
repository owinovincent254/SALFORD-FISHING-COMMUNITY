const submit=document.getElementById('submit');
const enterPassword=document.getElementById('password');
const fullName=document.getElementById('username')
const confirmPassword=document.getElementById('confirmPassword');
submit.addEventListener('click', function(e){
e.preventDefault()
if (fullName.value===""){
    alert('Enter Your Full Name')
}
else if(enterPassword.value==""){
    alert('Enter Your Password')
}
else if(confirmPassword.value==""){
    alert("Confirm Your Password")
}
else{
    const userData= {
        fullName:fullName.value,
        password:enterPassword.value,
    

    }
    const user = JSON.parse(localStorage.getItem("user"));
user.map(item=>{

    if(userData.fullName === item.fullName && userData.password === item.password) {
        alert('You have successfully signed in.');
        window.location="index.html"
    
    } else {
        alert("Invalid Credentials")
    }
})
}
})