//Password is valid

describe("password_is_valid", function(){
    
  it("password should be larger than 8 characters", function(){
      expect(password_is_valid("hdfTG12g")).toBe(true);
  })
    
 
 it("password should not be null", function(){
      expect(password_is_valid("hsda23KJss")).toBe(true);
  })
    
    
 it("password should have at least one uppercase letter",function(){
      expect(password_is_valid("ghFh367231")).toBe(true);
  })
    
 it("password should have at least one lowercase letter", function(){
      expect(password_is_valid("Hj34245GD")).toBe(true);
  })
    
 it("password should have at least one number", function(){
      expect(password_is_valid("hj5jaDEEjd")).toBe(true);
  })
    
});
 


//Password is ok


describe("password_is_ok", function(){

  it("password should be larger than 8 characters", function(){
      expect(password_is_ok("hdfTG12g4")).toBe(true);
  })
    
 
 it("password should not be null", function(){
      expect(password_is_ok("hsda23KJss")).toBe(true);
  })
    
    
 it("password should have at least one uppercase letter",function(){
      expect(password_is_ok("ghGFh367231")).toBe(true);
  })
    
 it("password should have at least one lowercase letter", function(){
      expect(password_is_ok("hjsa34245GD")).toBe(true);
  })
    
 it("password should have at least one number", function(){
      expect(password_is_ok("hj16jaDEEjd")).toBe(true);
  })  


});

//never okay password
describe("not_okay", function(){

   it ("password should be larger than 8 characters", function(){
        expect(not_okay("hj16jaDEEjd")).toBe(false);

   })
  
    it ("password should not be null", function(){
        expect(not_okay("hj16jaDEEjd")).toBe(false);

   })
  

});
