<template>
  <div id="nav">
        <router-link id="logo-url" to="/">
            <img id="logo" src="../assets/logo.png" alt="Bellator Logo">
        </router-link>
        <router-link v-show="!logged" to="/login">Login</router-link>
        <p id="login" v-show="!logged">|</p>
        <router-link v-show="!logged" to="/register">Sign up</router-link>
        <input @click=logout() type="button" v-show="logged" value="Logout">
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
      logged: Boolean
    },
    methods: {
      logout() {
        sessionStorage.removeItem('Access-Token')
        sessionStorage.removeItem('Refresh-Token')
        localStorage.removeItem('Access-Token')
        localStorage.removeItem('Refresh-Token')
        this.$router.go()
      }
    }
}
</script>

<style scoped>
    #nav {
        background-color: #222;
        border-bottom: 4px solid #1496de ;
        padding: 15px 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 55px;
        height: 55px;
        display: flex;
        transition: .5s;

    }

    #logo:hover {
        transform: scale(1.2)

    }

    #nav a,p,input {
        color: #1496de ;
        text-decoration: none;
        margin: 10px;
        transition: .5s;
        border: 0px;
        font-size: medium;
    }
    
    input:hover {
        color: #FFF;
    }

    #nav a:hover {
        color: #FFF;
    }
</style>
