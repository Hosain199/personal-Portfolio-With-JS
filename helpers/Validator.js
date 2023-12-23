class Validator {   

    //validator class to process of valid data

    static isValidEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
  

        // Login Validator
    static LoginValidator(data) {
      const errors = {
        email: "",
        password: ""
      }
      if(!this.isValidEmail(data.email)) {
        errors.email = "Email is Invalid.";
      }
      if(data.password.length < 5 || data.password.length > 20) {
        errors.password = "Password must be between 5 to 20 characters."
      }
      return errors;
    }
  
    // Registraiton Validator
    static RegistrationValidator(data) {
      const errors = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      } 
      if(!this.isValidEmail(data.email)) {
        errors.email = "Email is invalid."
      }
      if(data.username.length < 2 || data.username.length > 10) {
        errors.username = "Username must be between 2 to 10 characters.";
      }
      if(data.password.length < 5 || data.password.length > 20) {
        errors.password = "Password must be between 5 to 20 characters."
      }
      if(data.password != data.confirmPassword) {
        errors.confirmPassword = "Password does not match";
      }
      return errors;
    }
  
    static ErrorCount(errors) {
        let count = 0;
        for(const property in errors) {
            if(errors[property].length != 0) count++;
        }
        return count;
    }
  
  }
  
  // const data = {
  //   email: "hosainmahmud@gmail.com",
  //   password: "12345678a"
  // }
  
  // console.log(Validator.LoginValidator(data))
  // console.log(Validator.isValidEmail("done@gmail.com"))
  
  module.exports = {Validator}
  