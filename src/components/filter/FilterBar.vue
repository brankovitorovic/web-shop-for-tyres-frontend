<template>
    <div class="bar">
        <div class="filterBar">
            <h2 class="title">Filters</h2>

            <div class="optionals">
                <div class="priceRange"> 

                    <label for="price">Price range from:</label>
                    <input type="number" v-model="priceFrom">

                    <label for="price">to:</label>
                    <input type="number" v-model="priceTo">
                    <button @click="apply">Apply</button>
                    
                    <button class="redText" @click="reset">Reset price</button>

                </div> 

                <div class="sortBy">
                    <label for="sort">Sort by:</label>
                    <select @change="sortBy" v-model="selectedSort">
                        <option disabled value="null">Price or Name</option>
                        <option v-for="sort in sorts" v-bind:key="sort"> {{sort}}</option>
                    </select>

                </div>

                

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "FilterBar",
    data(){
        return {
            sorts: ["Price ascending","Price descending", "Brand ascending", "Brand descending"],
            selectedSort: null,
            priceFrom: null,
            priceTo: null
        }
    },
    methods: {
        sortBy(){
            this.$store.dispatch("sort",this.selectedSort);
        },
        apply(){
            this.$store.dispatch("price",{priceFrom: this.priceFrom, priceTo: this.priceTo});
        },
        reset(){
            this.$store.dispatch("reset");
        }
    }
}
</script>

<style scoped>

.bar {
    width: 85%;
    margin: auto;
    background-color: white;
    border-radius: 10px;

}

.filterBar {
    background-color: rgba(255, 127, 80, 0.5);
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding-bottom: 30px;
    margin-bottom: 50px;
}

.filterBar .optionals {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: auto;
}

.title {
    padding-top: 20px;
    font-size: xx-large;
    font-weight: normal;
}

select {
    height: 20px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    border: 1px solid black;
}

label {
    font-size: x-large;
}

.priceRange label {
    margin: 10px;
}

.priceRange button {
    padding: 5px 15px;
    background-color: rgba(7, 188, 253,0.5);
    color: #333333;
    font-weight: 300;
    border: 1px solid #333333;
    border-radius: 10px;
    cursor: pointer;
    margin: 0px 20px;
}

.sortBy label {
    margin-right: 10px;
}

input {
    border-radius: 10px;
    outline: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
    border: 1px solid black;
    width: 70px;
    height: 22px;
}

.priceRange .redText {
    margin-left: 10px;
    color: red;
}

</style>