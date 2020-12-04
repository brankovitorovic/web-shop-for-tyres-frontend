<template>
    <div class="search">
        <div class="bar">
            <div class="searchBar">
                <h2 class="title">Select desired dimension of tyre</h2>

                <div class="optionals">
                    <div>
                        <h2>Select width</h2>
                        <select v-model="selectedWidth">
                            <option disabled value="">Width</option>
                            <option v-for="w in allWidth" v-bind:key="w"> {{w}} </option>
                        </select>
                    </div>
                    <div>
                        <h2>Select height</h2>
                        <select v-model="selectedHeight">
                            <option disabled value="">Height</option>
                            <option v-for="h in allHeight" v-bind:key="h"> {{h}} </option>
                        </select>
                    </div>
                    <div>
                        <h2>Select diameter</h2>
                        <select v-model="selectedDiameter">
                            <option disabled value="">Diameter</option>
                            <option v-for="d in allWheelDiameter" v-bind:key="d"> {{d}} </option>
                        </select>
                    </div>
                    <div>
                        <h2>Select season</h2>
                        <select v-model="selectedSeason">
                            <option disabled value="">Season</option>
                            <option v-for="s in allSeasons" v-bind:key="s"> {{s}} </option>
                        </select>
                    </div>
                </div>

                <button @click="searchTyres" >Search</button> <!-- dodaj router.push gde treba -->



            </div>
        
        </div>

        <h1>Most popular</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allWidth: ["165","170","175"],
            allHeight: ["40","50","60","70"],
            allWheelDiameter: ["14","15","16","17"], // ovo ces da uzmes u metodi od back-a
            allSeasons: ["Summer","Winter","All season"], // these are the only possibilities, no need to ask backend
            selectedWidth: '',
            selectedHeight: '',
            selectedDiameter: '',
            selectedSeason: ''
        }
    },
    methods: {
        searchTyres(){
            this.$router.push("/search");
        }
    }


}
</script>

<style scoped>

.search {
    text-align: center;
}

h1 {
    margin: 90px 0 30px 0px;
    color: white;
}

.bar {
    width: 85%;
    margin: auto;
    background-color: white;
    border-radius: 10px;
}

.searchBar {
    background-color: rgba(255, 127, 80, 0.5);
    width: 100%;
    text-align: center;
    border-radius: 10px;
}

.searchBar .optionals{
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: auto;
}

button {
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 15px 30px 15px 30px;
    background-color: rgba(7, 188, 253,0.5);
    font-size: large;
    color: #333333;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
}

.title {
    padding-top: 20px;
    font-size: xx-large;
}

select {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
}

.optionals > div {
    width: 200px;
}

</style>