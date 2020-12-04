<template>
  <div class="home">
    
    <div class="searchBar">
      <SearchBar></SearchBar>
    </div>
    
    <div class="resaultCard">
      <ResaultCards></ResaultCards>
    </div>
  
  </div>
</template>

<script>
import SearchBar from '../components/search/SearchBar.vue'
import ResaultCards from '../components/resault-cards/ResaultCards.vue'

export default {
  name: 'Home',
  components: {
    SearchBar, ResaultCards
  }
}
</script>

<style scoped>

.home {
  width: 100%;
  height: 1900px;
}

.resaultCards {
  margin-top: 60px;
}

</style>