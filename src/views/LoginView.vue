<template>
  <Login />
</template>

<script>
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
    Login
  }
}
</script>

<style scoped>

</style>