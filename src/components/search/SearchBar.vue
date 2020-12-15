<template>
    <div class="search">
        <div class="bar">
            <div class="searchBar">
                <h2 class="title">Select desired dimension of tyre</h2>

                <div class="optionals">
                    <div>
                        <h2>Select width</h2>
                        <select v-model="selected.width">
                            <option disabled value="">Width</option>
                            <option v-for="w in allWidth" v-bind:key="w"> {{w}} </option>
                        </select>
                    </div>
                    <div>
                        <h2>Select height</h2>
                        <select v-model="selected.height">
                            <option disabled value="">Height</option>
                            <option v-for="h in allHeight" v-bind:key="h"> {{h}} </option>
                        </select>
                    </div>
                    <div>
                        <h2>Select diameter</h2>
                        <select v-model="selected.diameter">
                            <option disabled value="">Diameter</option>
                            <option v-for="d in allWheelDiameter" v-bind:key="d"> {{d}} </option>
                        </select>
                    </div>
                    <div>
                        <h2>Select season</h2>
                        <select v-model="selected.season">
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
import axios from 'axios'

export default {

    name: "SearchBar",
    created() {
        this.getDimensions();
    },
    data() {
        return {
            allWidth: [],
            allHeight: [],
            allWheelDiameter: [],
            allSeasons: ["SUMMER","WINTER","ALLSEASON"], // these are the only possibilities, no need to ask backend
            selected: { 
                width: "",
                height: "",
                diameter: "",
                season: "",
            }
        }
    },
    methods: {
        getDimensions(){
            axios({url: "/tyre/dimensions",method:"GET"})
            .then( resp => {
                this.allWidth = resp.data.widths;
                this.allHeight = resp.data.heights;
                this.allWheelDiameter = resp.data.diameters;
            })
            .catch( err => console.log(err));
        },
        searchTyres(){

            if(this.selected.season == ""){
                alert("Please select tyre season.");
                return;
            }

            this.$store.dispatch('search',{selected: this.selected});
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