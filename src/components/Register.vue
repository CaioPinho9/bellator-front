<template>
  <ConfirmationEmail :data="data" v-if="confirmation"/>
  <div v-else>  
    <h1>Register</h1>
    <div>
      <form id="sign-up-form" @submit.prevent="handleSubmit">
        
        <div class="input-container">
          <label class="input-label" for="email">Email</label>
          <input @focus="removeError" v-model="email" type="text" class="input" id="email" name="email" placeholder="Enter Email">
        </div>

        <div class="input-container">
          <label class="input-label" for="firstName">First Name</label>
          <input @focus="removeError" v-model="firstName" type="text" class="input" id="firstName" name="firstName" placeholder="Enter First Name">
        </div>
        <div class="input-container">
          <label class="input-label" for="lastName">Last Name</label>
          <input @focus="removeError" v-model="lastName" type="text" class="input" id="lastName" name="lastName" placeholder="Enter Last Name">
        </div>

        <div class="input-container">
          <label class="input-label" for="password">Password</label>
          <input @focus="removeError" v-model="password" type="password" class="input" id="password" name="password" placeholder="Enter Password">
        </div>

        <div class="input-container">
          <label class="input-label" for="confirmPassword">Confirm Password</label>
          <input @focus="removeError" v-model="confirmPassword" type="password" class="input" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password">
        </div>

        <div class="button-container">
          <div class="button">
            <input @focus="removeError" type="submit" class="submit-btn" value="Register">
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
          
          <div class="login">
            <input @click="$router.push('/login')" type="button" class="login" value="Already have an account?">
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ConfirmationEmail from '../components/ConfirmationEmail.vue';


export default {

  name: "Register",
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      data: null,
      confirmation: false
    }
  },
  components: {
    ConfirmationEmail
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()

      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }

      this.data = data

      console.log(process.env.VUE_APP_ROOT_API);

      const dataJson = JSON.stringify(data)

      console.log(dataJson);

      if (data.password !== this.confirmPassword) {
        document.getElementById('password').setAttribute("data-error", "")
        document.getElementById('confirmPassword').setAttribute("data-error", "")
        return
      }

      if (!this.checkError()) {
        return
      }

      await axios.post('registration', dataJson, {
        headers: {
        'Content-Type': 'application/json'
        }
      })
      this.confirmation = true
    },
    checkError() {
      document.querySelectorAll(".input").forEach(input => {
        if (input.value == "") {
          input.setAttribute("data-error", "")
          return false
        }
      })
      return true
    },
    removeError(e) {
      e.target.removeAttribute("data-error")
    }
  }
}
</script>

<style scoped>

  h1 {
    text-align: center;
    font-size: 30px;
    padding-top: 20px;
    margin-bottom: 15px;
    color: #fff;
  }

  #sign-up-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    background-color: #262a2b;
    border: 4px solid #0f71a7;
    border-radius: 10px;
    color: #33abed;
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
    display: flex;
    flex-direction: row;  
    flex-wrap: nowrap;
    font-size: 14px; 
    white-space: nowrap;   
  }

  .login {
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    cursor: pointer;
    transition: .5s;
    padding: 0;
    font-size: 14px;
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
    color: #33abed
  }

  input {
    width: 100%;
    padding: 5px 10px; 
    background-color: #404548;
    border: 1px solid #0f71a7;
    color: #33abed;
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
    color: #33abed;
    font-weight: bold;
    border: 2px solid #0f71a7;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: #33abed;
    border: 2px solid #33abed;
    color: #fff;
  }
</style>