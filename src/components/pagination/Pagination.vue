<template>
    <div class="pagination">
            <h2 class="pagination-btn" v-if="showPreviousPage()" @click="changePage(paginationInfo.page - 1)">  &lt; </h2>
            <h2>{{paginationInfo.page + 1}} of {{paginationInfo.numberOfPages}}</h2>
            <h2 class="pagination-btn" v-if="showNextPage()" @click="changePage(paginationInfo.page + 1)" > > </h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Pagination",
    computed: {
        ...mapGetters([
            'paginationInfo'
        ])
    },
    methods: {
        showPreviousPage(){
            return this.paginationInfo.page > 0 ? true : false;
        },
        showNextPage(){
            return this.paginationInfo.page + 1 < this.paginationInfo.numberOfPages ? true : false;
        },
        changePage(page){
            this.$store.dispatch("changePage",page);
            window.scrollTo({
                    top: 300,
                    left: 0,
                    behavior: 'smooth'
            });
        },

    }
}
</script>

<style scoped>

h2 {
    display: inline;
    color: #333333;
}

.pagination {
    margin: 10px;
    text-align: right;
}

.pagination-btn {
  cursor: pointer;
}

</style>