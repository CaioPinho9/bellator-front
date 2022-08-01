<template>
  <div class="confirmation-message">
    <h1>Confirm your Email</h1>
    <p>Please check your inbox for a confirmation email. Click the link in the email to confirm your email address</p>
    <p>After you confirm click Continue.</p>

    <div class="button-container">
      <div class="button">
        <input @click="$router.push('/')" type="button" class="continue" value="Continue">
      </div>
      <div class="button">
        <input @click="sendEmail()" type="button" class="re-send" value="Re-send confirmation email">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ConfirmationEmail",
  props: {
    data: Object
  },
  methods: {
    async sendEmail() {

      const dataJson = JSON.stringify(this.data)

      console.log(dataJson);

      await axios.post('/token', dataJson, {
        headers: {
        'Content-Type': 'application/json'
        }
      })

    }
  }
}
</script>

<style scoped>

  .confirmation-message {
    position: relative;
    top: 30%;
    width: fit-content;
    margin: auto;
    border: 4px solid #0f71a7;
    border-radius: 10px;
    text-align: center;
    padding: 30px;
    background-color: #262a2b;
    color: #fff;
  }

  h1 {
    padding: 10px;
    font-size: xx-large;
  }

  p {
    padding: 5px;
    font-size: large;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .button {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    width: 49%;
    flex-direction: row;
  }

  input {
    width: 100%;
    background-color: #222;
    color: #33abed;
    font-weight: bold;
    border: 2px solid #0f71a7;
    padding: 15px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  input:hover {
    background-color: #33abed;
    border: 2px solid #33abed;
    color: #fff;
  }

  .continue {
    background-color: #0f71a7;
    color: #fff;
  }
</style>