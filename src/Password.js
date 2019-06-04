//password is valid
function password_is_valid(password){
   var validation = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{9,}$/;
   var output = validation.test(password);


    
function password_is_ok(password){
           
           var upper = /[A-Z]/;
          
           var lower = /[a-z]/;
           
           var number = /[a-z]/;
           
           if(upper || lower || number){
               return true;
           } else if(two || one || four){
               return true;
           
function not_okay(password){
   if(password.length < 9 || password.length == 0){
       return "Password is never OK";
   }
  
}










