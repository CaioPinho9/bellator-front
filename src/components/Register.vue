<template>
  <div>
    <h1>Register</h1>
    <Message :msg="msg" :normal="false" :success="success" v-show="msg">Mensagem</Message>
    <div>
      <form id="login-form">
        
        <div class="input-container">
          <label class="input-label" for="email">Email</label>
          <input type="text" class="input" id="email" name="email" placeholder="Enter Email">
        </div>

        <div class="input-container">
          <label class="input-label" for="firstName">First Name</label>
          <input type="text" class="input" id="firstName" name="firstName" placeholder="Enter First Name">
        </div>
        <div class="input-container">
          <label class="input-label" for="lastName">Last Name</label>
          <input type="text" class="input" id="lastName" name="lastName" placeholder="Enter Last Name">
        </div>

        <div class="input-container">
          <label class="input-label" for="password">Password</label>
          <input type="password" class="input" id="password" name="password" placeholder="Enter Password">
        </div>

        <div class="button-container">
          <div class="button">
            <input type="submit" class="submit-btn" value="Register">
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
            <a v-show="!(signUp)" href="">Forgot password?</a>
        </div>

        <div class="login">
          <input @click="$router.push('/login')" type="button" class="login" value="Already have an account?">
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {

  name: "Register",
  data() {
    return {
      msg: null,
      success: null,
    }
  },
  components: {
    Message
  }
}
</script>

<style scoped>

  h1 {
    text-align: center;
    font-size: 30px;
    padding-top: 80px;
    margin-bottom: 15px;
    color: #fff;
  }

  a{
    margin: 0;
    font-size: 14px;
    color: #1496de;
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

  .login {
    padding: 5px;
    padding-top: 10px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    cursor: pointer;
    transition: .5s;
  }

  .login:hover {
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