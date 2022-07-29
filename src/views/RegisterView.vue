<template>
  <Register />
</template>

<script>
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
    Register
  }
}
</script>

<style scoped>

</style>