<template>
  <Register />
</template>

<script>
import Message from '../components/Message.vue'
import Register from '../components/Register.vue';

export default {

  name: "RegisterView",
  data() {
    return {
      msg: null,
      success: null,
    }
  },
  components: {
    Message,
    Register
  }
}
</script>

<style scoped>

</style>