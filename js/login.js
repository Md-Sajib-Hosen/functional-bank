document.getElementById('show-password').addEventListener('click',function(){

    const catchPassword = document.getElementById('user-password');
    const password = catchPassword.value;
    document.getElementById('view-password').innerText = password;
})

//login button
document.getElementById('login-btn').addEventListener('click',function(){
    const catchEmail = document.getElementById('user-email');
    const email= catchEmail.value;
    //get password
    const catchPassword = document.getElementById('user-password');
    const password = catchPassword.value;
    catchEmail.value = '';
    catchPassword.value= '';
     
    
    if(email=='contact.sajib297@gmail.com' && password=='password'){
        
        window.location.href='banking.html'
    }
    else {
        document.getElementById('message').innerText='Enter a Valid User';

        
    

    }
   
})
