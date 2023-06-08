const submit=document.getElementById('submit');
const service=document.getElementById('service')
const firstName=document.getElementById('first');
const lastName=document.getElementById('last');
const emailAddress=document.getElementById('email');
const streetAddress=document.getElementById('street');
const phoneNumber=document.getElementById('number');
const fishQuantity=document.getElementById('quantity');
submit.addEventListener('click', function(e){
    e.preventDefault()
if(service.value===""){
alert('Enter Your Services')
}

  else  if (firstName.value===""){
        alert('Enter Your First Name')
    }
    else if(lastName.value===""){
        alert( 'Enter Your Last Name')
    }
    else if(emailAddress.value===""){
        alert('Enter Your Email Address')
    }
    else if(streetAddress.value===""){
        alert('Enter Your Street Address')
    }
    else if(phoneNumber.value===""){
        alert('Enter Your Phone Number')
    }
    else if(fishQuantity.value===""){
        alert('Enter The Amount and Types of Fish You Want')
    }
    else{
        
        
        
        }
        

})
