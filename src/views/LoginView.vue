<template>
  <Login />
</template>

<script>
import Message from '../components/Message.vue'
import Login from '../components/Login.vue';

export default {

  name: "LoginView",
  data() {
    return {
      msg: null,
      success: null,
    }
  },
  components: {
    Message,
    Login
  }
}
</script>

<style scoped>

</style>