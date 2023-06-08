const signUp=document.getElementById("signUp");
const email=document.getElementById('email');
const enterPassword=document.getElementById('enterPassword');
const confirmPassword=document.getElementById('confirmPassword');
console.log(email)
// console.log(signUp)
const fullName=document.getElementById("firstName");
// console.log(fullName)
signUp.addEventListener("click",function(e){
    e.preventDefault()
    // console.log(fullName.value)
    if(fullName.value===""){
        alert('Enter your full name')
    }
else if(email.value===""){
 alert('Enter Your Email')   
}
else if(enterPassword.value===""){
    alert('Enter Your Password')
}
else if(confirmPassword.value===""){
    alert('Confirm Your Password')
}

else{
    const userData= {
        fullName:fullName.value,
        email:email.value,
        password:enterPassword.value,
    

    }
    
    let userDetail=[]
    userDetail.push(userData)
    
    localStorage.setItem('user',JSON.stringify(userDetail));
    window.location="sign-in.html"
    
    


}
// function store(){
//     localStorage.setItem('fullName',fullName.value);
//     localStorage.setItem('enterPassword',enterPassword.value);
// }
// function check(){
// const fullName=localStorage.getItem('fullName');
// const enterPassword=localStorage.getElementById('enterPassword');
// }

})

