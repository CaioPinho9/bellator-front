<template>
  <div id="nav">
        <router-link id="logo-url" to="/">
            <img id="logo" src="../assets/logo.png" alt="Bellator Logo">
        </router-link>
        <router-link to="/pedidos">Orders</router-link>
        <p>|</p>
        <router-link to="/login">Login</router-link>
        <p id="login">|</p>
        <router-link to="/register">Sign up</router-link>

    </div>
</template>

<script>
export default {
    name: 'NavBar'
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

    #nav a,p {
        color: #1496de ;
        text-decoration: none;
        margin: 10px;
        transition: .5s;
    }

    #nav a:hover {
        color: #FFF;
    }
</style>
