//Password is valid
function password_is_valid(password){
   var check = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{9,}$/
   var result = check.test(password);
  try {
    if(result == false) throw('Password must contain atleast one uppercase letter, lowercase letter and a number');
  } catch (error) {
    return 'Error ' + error;
  }
   
    return result;   
 }


//function is ok
function password_is_ok(password) {
 
 var pass1 = /^[A-Za-z0-9]{9,}$/;
 var pass2 = /^(?=.*[A-Z])[A-Z]+/;
 var pass3 = /^(?=.*[a-z])[a-z]+/;
 var pass4 = /^(?=.*[0-9])[0-9]+/;
 var pass5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{9,}$/;

 if (pass1.test(password) === true && pass2.test(password) === true) {
   return 'Password is valid';
 } else
 if (pass1.test(password) === true && pass3.test(password) === true) {
   return 'Password is valid';
 } else
 if (pass1.test(password) === true && pass4.test(password) === true) {
   return 'Password is valid';
 } else{
 if (pass5.test(password) === true)
   return 'Password is valid';
 }
}

//Password never ok

function never_ok(password){
     if(password.length < 9 || password.length == 0){
       return "Password is never OK";
   }
} 








