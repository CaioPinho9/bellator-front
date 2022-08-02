<template>
  <div><p>{{ msg }}</p></div>
</template>

<script>
import axios from "axios"

export default {
  name: "ResponseView",
  data() {
    return {
      msg: null
    }
  },
  mounted: async function() {
    var msg
    var token = window.location.href.split("=")
    token = token[1]

    const dataJson = JSON.stringify({})

    await axios.get('/confirm?token=' + token, dataJson, {
      headers: {
      'Content-Type': 'application/json'
      }
    }).catch(function (error) {
      if (error.response) {
        msg = error.response.data
      }
    });

    if (msg == null) {
        msg = "Your address was confirmed"
    }

    this.msg = msg.charAt(0).toUpperCase() + msg.slice(1);
  }
}
</script>

<style scoped>

  div {
    position: relative;
    top: 35%;
    width: fit-content;
    margin: auto;
    border: 4px solid #0f71a7;
    border-radius: 10px;
    text-align: center;
    padding: 30px;
    background-color: #262a2b;
    color: #fff;
    font-size: larger;
  }

</style>