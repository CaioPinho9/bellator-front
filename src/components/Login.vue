<template>
  <div>
    <h1>Login</h1>
    <div>
      <form id="login-form">
        
        <div class="input-container">
          <label class="input-label" for="email">Email</label>
          <input type="text" class="input" id="email" name="email" placeholder="Enter Email">
        </div>

        <div class="input-container">
          <label class="input-label" for="password">Password</label>
          <input type="password" class="input" id="password" name="password" placeholder="Enter Password">
        </div>

        <div class="button-container">
          <div class="button">
            <input type="submit" class="submit-btn" value="Login">
          </div>
          <div class="button">
            <input @click="$router.push('/')" type="button" class="submit-btn" value="Cancel">
          </div>
        </div>

        <div class="bottom-container">
          <div id="remember-me">
            <input id="check" type="checkbox" name="Remember me">
            <span>Remember me</span>
          </div>
            <a href="">Forgot password?</a>
        </div>

        <div class="sign-up">
          <input @click="$router.push('/register')" type="button" class="sign-up" value="SIGN UP">
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {

  name: "Login",
  data() {
    return {
      success: null,
    }
  },
  components: {
  }
}
</script>

<style scoped>

  h1 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 15px;
    padding-top: 80px;
    color: #fff;
  }

  a{
    margin: 0;
    font-size: 14px;
    color: #1496de;
    transition: .5s;
  }

  #login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    background-color: #333;
    border: 4px solid #1496de;
    border-radius: 10px;
    color: #1496de;
    }

  .input-container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .button-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .button {
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
    width: 49%;
    flex-direction: row;
  }

  .bottom-container {
    display: flex;                  
    flex-direction: row;           
    flex-wrap: nowrap;              
    justify-content: space-between;
  }

  #check {
    margin-right: 5px;
  }

  #remember-me {
    margin-top: 1px;
    display: flex;
    flex-direction: row;  
    flex-wrap: nowrap;
    font-size: 14px; 
    white-space: nowrap;   
  }

  .sign-up {
    padding: 0;
    padding-top: 3px;
    text-align: right;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    cursor: pointer;
    transition: .5s;
    text-decoration: underline;
  }

  .sign-up:hover, a:hover {
    color: #fff;
  }

  label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    padding: 5px 5px;
  }

  ::placeholder {
    color: #1496de
  }

  input {
    width: 100%;
    padding: 5px 10px;
    background-color: #555;
    border: 1px solid #1496de;
    color: #1496de;
  }

  .input[data-error] {
    border-color: #f00;    
  }

  .input-label[data-error] {
    border-color: #f00;    
    color: #f00
  }

  .submit-btn {
    background-color: #222;
    color: #1496de;
    font-weight: bold;
    border: 2px solid #1496de;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: #1496de;
    border: 2px solid #1496de;
    color: #fff;
  }
</style>