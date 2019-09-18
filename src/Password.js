//Password is valid

function password_is_valid(password){
    var check = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{9,}$/
    var result = check.test(password);
        
        if (result == false) {
            throw new Error("Password must contain atleast one uppercase letter, lowercase letter and a number");
        }

    return result;
}



//Password is ok
function password_is_ok(password) {

    var pass1 = /^[A-Za-z0-9]{9,}$/;
    var pass2 = /^(?=.*[A-Z])[A-Z]+/;
    var pass3 = /^(?=.*[a-z])[a-z]+/;


    if (pass1.test(password) === true && pass2.test(password) === true) {
        return true;
    } else if (pass1.test(password) === true && pass3.test(password) === true) {
        return true;
    } else if (pass2.test(password) === true && pass3.test(password) === true) {
        return true;
    } else
        return  false;

}

//Password never ok

function never_ok(password){
    if(password.length < 9 || password === null){
        return "Password is never OK";
    }
} 






