<template>
  <div id="app">
    <div class="groot">  
        <Header></Header>

        <router-view/>

        <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/header-footer/Header.vue'
import Footer from './components/header-footer/Footer.vue'

export default {
  name: "App",
  components: {
    Header, Footer
  },
    created() {
    this.$store.dispatch('checkLoggedUser');
  } 
}
</script>

<style>

#app {
  background-image: url("https://hdwallsource.com/img/2016/1/tires-widescreen-wallpaper-50154-51841-hd-wallpapers.jpg");
  background-repeat: no-repeat;  
  background-position: 0% 0%;
  background-size: cover;
  background-color: white;
  height: 900px;
  
}
::-webkit-scrollbar {
    display: none;
}
.groot {
  position: relative;
  width: 85%;
  margin: auto;
  text-decoration: none;
  color: #333333;
}

</style>
