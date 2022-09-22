<template>
  <div class="home">
    <NavBar :logged="logged" />
    <Product />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue"
import User from '../User.js'
import Product from "@/components/Product.vue"

export default {
  name: 'HomeView',
  data() {
    return {
      logged: false
    }
  },
  mounted() {
    User()
    if (sessionStorage.getItem("Refresh-Token")) {
      this.logged = true
    } else {
      this.logged = false
    }
  },
  components: {
    NavBar,
    Product
}
}
</script>
