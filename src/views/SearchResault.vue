<template>
    <div class="searchResault">
        <FilterBar></FilterBar>
        <Pagination></Pagination>
        <ResaultCard></ResaultCard>
        <Pagination></Pagination>
    </div>
</template>

<script>
import FilterBar from '../components/filter/FilterBar.vue' 
import ResaultCard from '../components/resault-cards/ResaultCards.vue'
import Pagination from '../components/pagination/Pagination.vue'

export default {
    name: "SearchResaults",
    components: {
        FilterBar, ResaultCard, Pagination
    }


}
</script>

<style scoped>

.searchResault {
    height: 1900px;
}

</style>