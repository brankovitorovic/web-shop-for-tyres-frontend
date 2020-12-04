<template>
    <div class="header">
       
        <div class="left">
            
            <router-link to="/" class="logo">WebTyres</router-link>
            
            <router-link id="home" to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact Us</router-link>

        </div>

        <div class="right">
          
            <span v-if="isLogged">
                <a>Hi {{username}} </a>
                <router-link to="/profil"> Profil </router-link> 
                <a @click="logout">Logout</a>
                <router-link to="/cart">Cart</router-link>
                
            </span>
            <span v-else>
                <router-link to="/signIn">Sign In</router-link>
            </span>

        </div>

    </div>
</template>

<script>
export default {
    computed:{
        isLogged(){
            return this.$store.getters.isLoggedIn;
        },
        username(){
            return this.$store.getters.username;
        }
    },
    methods:{
        logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
            document.getElementById("home").click();
        })
      }
    }
}
</script>

<style scoped>

.header {
    background-color: rgba(0,0,0,0);
    width: 100%;
    margin-bottom: 30px;
    padding: 50px 0 50px 0;
}

.right {
    float: right;
}

.left {
    float: left;
}

a {
    margin: 10px 25px 10px 25px;
    font-size: 20pt;
    text-decoration: none;
    color: #333333;
    cursor: pointer;
} 




</style>
