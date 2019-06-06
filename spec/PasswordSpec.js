//Password is ok
describe('password_is_valid', function(){
  it('password should be larger than 8 characters', function(){
      let output = password_is_valid('lin237GHdh');
      expect(output).toBe(true);
  })
  it('password should not be null', function(){
      let output = password_is_valid('sa4231Dgh');
      expect(output).toBe(true);
  })
  it('password should have at least one uppercase letter', function(){
      let output = password_is_valid('liNDyM234');
      expect(output).toBe(true);
  })
  it('password should have at least one lowercase letter', function(){
      let output= password_is_valid('shaHeedaH23');
      expect(output).toBe(true);
  })
  it('password should have at least one number', function(){
      let output= password_is_valid('lin3454dFf');
      expect(output).toBe(true);
  })
});

//Password is ok
describe('password_is_ok', function(){
    
  it('should check if password is greater than eight characters and has at least one uppercase ', function(){
      let output = password_is_ok('H4ffLOgOOg');
      expect(output).toBe('Password is valid');
  })
  it('should check if password is greater than eight characters and has at least one lowercase', function(){
      let output= password_is_ok('jhs78whjs');
      expect(output).toBe('Password is valid');
  })
  it('should check if password is greater than eight characters and has atleast one number', function(){
      let output = password_is_ok('dfhgw67bs7jK');
      expect(output).toBe('Password is valid');
  })
  it('should check if password has more than eight characters', function(){
      let output= password_is_ok('Hasy367ghas');
      expect(output).toBe('Password is valid');
  })
  it('should check if password is greater than eight characters and has at least one upper and lower case letter and a number', function(){
      let output = password_is_ok('Hsahrh43');
      expect(output).toBe('Password is valid');
  })
});

//never okay

describe("never_ok(password)", function(){

   it ("should have more than 8 characters and not be null", function(){
       let output = never_ok("12dfga3");
       expect(output).toBe("Password is never OK");
   })

});