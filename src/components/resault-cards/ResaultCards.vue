<template>
    <div class="resaultCard">
        <div class="cards">
            
            <Card v-for="tyre in getTyres()" :key="tyre.name" v-bind:tyre="tyre"></Card>
            <!-- sta ako je prazan niz pri srcovanju ? -->
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {

    name: "ResaultCards",
    components: {
        Card
    },
    data(){
        return {
            pagination : {numberPerPage : 12,currentPage: 1, totalPages: 3, actice: true },
        }
    },
    methods: {
        getTyres(){
            const res = [ // ovo naravno nece postojati posle...
                {brand: "Continental", name: "Winteruske", width: "165", height: "65", diameter: "15", season: "Winter", price: "39", discount: "0"},
                {brand: "FireStone", name: "Oper", width: "165", height: "65", diameter: "15", season: "Winter", price: "65", discount: "0"},
                {brand: "Continentall", name: "Poeurt", width: "165", height: "65", diameter: "15", season: "Winter", price: "66", discount: "0"},
                {brand: "Kamma", name: "Moger", width: "165", height: "65", diameter: "15", season: "Winter", price: "78", discount: "0"},
                {brand: "FireStone", name: "Wintedsruske", width: "165", height: "65", diameter: "15", season: "Winter", price: "155", discount: "0"},
                {brand: "Tigar", name: "Wrvst", width: "165", height: "65", diameter: "15", season: "Winter", price: "96", discount: "0"},
                {brand: "Continental", name: "Mjefou", width: "165", height: "65", diameter: "15", season: "Winter", price: "55", discount: "0"},
                {brand: "Kingston", name: "Fesdut", width: "165", height: "65", diameter: "15", season: "Winter", price: "50", discount: "0"},
                {brand: "Continentall", name: "Poeurt", width: "165", height: "65", diameter: "15", season: "Winter", price: "66", discount: "0"},
                {brand: "Kamma", name: "Moger", width: "165", height: "65", diameter: "15", season: "Winter", price: "78", discount: "0"},
                {brand: "FireStone", name: "Wintedsruske", width: "165", height: "65", diameter: "15", season: "Winter", price: "155", discount: "0"},
                {brand: "Tigar", name: "Wrvst", width: "165", height: "65", diameter: "15", season: "Winter", price: "96", discount: "0"},
                
            ];
            return res;
        }
    }



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