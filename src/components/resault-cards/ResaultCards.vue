<template>
    <div class="resaultCard">
        <div class="cards">
            
            <Card v-for="tyre in tyres" :key="tyre.frontID" v-bind:tyre="tyre"></Card>

        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
import { mapGetters } from 'vuex'

export default {

    name: "ResaultCards",
    components: {
        Card
    },
    computed: {
        ...mapGetters([
            'tyres'
        ])
    },
}
</script>

<style scoped>

.resaultCard {
    width: 100%;
    text-align: center;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

h1 {
    margin-top: 50px;
}


</style>